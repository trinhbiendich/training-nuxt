<template>
  <div class="container-fluid m-2">
    <div class="row show_form">
      <div class="col-12">
        <div class="form-group">
          <label for="url">URL</label>
          <input @change="addDataToServer" type="text" class="form-control" v-model="link.url" id="url" >
        </div>
        <button @click="addDataToServer" type="button" class="mbtn btn btn-primary">Add <span class="material-icons">add</span></button>
        <div v-if="message !== ''" class="mt-2 alert alert-danger">{{ message }}</div>
      </div>
    </div>
    <div class="row mt-210">
      <div class="col-lg-6 col-sm-12 p-2">
        <div class="mb-2 alert alert-info" >Wait <span class="material-icons md-n">pending_actions</span></div>
        <div v-for="(user, idx) in waitUsers" :key="'wait'+idx">
          <user-item @handleOnDeleteUser="onDeleteUser(user, 'wait')" :user="user" status="pending_actions" />
        </div>
      </div>
      <div class="col-lg-6 col-sm-12 p-2">
        <div class="mb-2 alert alert-success">Done <span class="material-icons md-n">thumb_up</span></div>
        <div v-for="(user, idx) in doneUsers" :key="'done'+idx">
          <user-item @handleRetry="onRetryDownload" @handleOnDeleteUser="onDeleteUser(user, 'done')" :user="user" status="task_alt" />
        </div>
      </div>
      <div v-if="deleteUsers.length > 0 || Object.keys(deleteUsers).length > 0" class="col-lg-12 col-sm-12 p-2">
        <div class="mb-2 alert alert-danger">Deleted <span class="material-icons md-n">delete</span></div>
        <div v-for="(user, idx) in deleteUsers" :key="'del'+idx">
          <user-item @handleRetry="onRetryDownload" @handleOnDeleteUser="onDeleteUser(user, 'delete')" :user="user" status="dangerous" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserItem from "@/components/common/UserItem";
export default {
  components: {UserItem},
  head() {
    return {
      title: this.pageInfo.title === "" ? "NuxtJS" : "NuxtJS | " + this.pageInfo.title
    }
  },
  props: {
  },
  data() {
    return {
      pageInfo: {
        title: "Flickr"
      },
      link: {
        url: '',
        text: ''
      },
      message: '',
      links: [],
      waitUsers: {},
      deleteUsers: {},
      doneUsers: {},
      allUsers: {},
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    async initData () {
      this.$axios.get('/users_wait').then(res => {
        if (res.data.type === 'error') {
          return
        }
        this.waitUsers = res.data.data
      })
      this.$axios.get('/users_delete').then(res => {
        if (res.data.type === 'error') {
          return
        }
        this.deleteUsers = res.data.data
      })
      this.$axios.get('/users_done').then(res => {
        if (res.data.type === 'error') {
          return
        }
        this.doneUsers = res.data.data
      })
      this.$axios.get('/users_all').then(res => {
        if (res.data.type === 'error') {
          return
        }
        this.allUsers = res.data.data
      })
    },
    refreshObjExceptThis (user, users) {
      let tmpUsers = {}
      for(let userId in users) {
        if (user.user_id === userId) {
          continue
        }
        tmpUsers[userId] = users[userId]
      }
      return tmpUsers
    },
    removeByDelete (user) {
      this.$axios.delete(`/${user.user_id}_photos`)
        .then(resOfDelPhotos => console.log(resOfDelPhotos, 'remove photos done'))
      this.$axios.$delete(`/users_delete/${user.user_id}`)
        .then(resOfDelUser => {
          this.deleteUsers = this.refreshObjExceptThis(user, this.deleteUsers)
        })
    },
    moveWaitToDelete (user) {
      this.$axios.post(`/users_delete/${user.user_id}`, user)
        .then(res => {
          this.$axios.$delete(`/users_wait/${user.user_id}`)
            .then(res2 => {
              this.waitUsers = this.refreshObjExceptThis(user, this.waitUsers)
              this.deleteUsers[user.user_id] = user
            })
        })
    },
    moveDoneToDelete (user) {
      this.$axios.post(`/users_delete/${user.user_id}`, user)
        .then(res => {
          this.$axios.$delete(`/users_done/${user.user_id}`)
            .then(res2 => {
              this.doneUsers = this.refreshObjExceptThis(user, this.doneUsers)
              this.deleteUsers[user.user_id] = user
            })
        })
    },
    onDeleteUser (user, type) {
      if (type === 'delete') {
        this.removeByDelete(user)
      }
      if (type === 'wait') {
        this.moveWaitToDelete(user)
      }
      if (type === 'done') {
        this.moveDoneToDelete(user)
      }
    },
    onRetryDownload (user, type) {
      if (type === 'delete') {
        this.$axios.post(`/users_wait/${user.user_id}`, user)
          .then(res => {
            this.$axios.$delete(`/users_delete/${user.user_id}`)
              .then(resOfDelUser => {
                this.deleteUsers = this.refreshObjExceptThis(user, this.deleteUsers)
                this.waitUsers[user.user_id] = user
              })
          })
      }
      if (type === 'done') {
        this.$axios.post(`/users_wait/${user.user_id}`, user)
          .then(res => {
            this.$axios.$delete(`/users_done/${user.user_id}`)
              .then(res2 => {
                this.doneUsers = this.refreshObjExceptThis(user, this.doneUsers)
                this.waitUsers[user.user_id] = user
              })
          })
      }
    },
    getMsgOfInvalidData () {
      if (!this.validUrl(this.link.url)) {
        return 'URL invalid'
      }
      if (this.link.text === '') {
        return 'Description cannot be empty'
      }
      return ''
    },
    addDataToServer () {
      this.link.text = this.link.url
      if (!this.validUrl(this.link.url) || this.link.text === '') {
        this.message = this.getMsgOfInvalidData()
        return;
      }
      this.message = ''
      let userId = this.getUserIdFromUrl(this.link.url)
      if (this.allUsers[userId] !== undefined) {
        this.message = 'This user already on the server'
        return
      }
      let user = {
        user_id: userId,
        display_text: this.link.text
      }
      this.$axios.post(`/users_all/${userId}`, user)
        .then(res => {
          this.$axios.$post(`/users_wait/${userId}`, user)
            .then(res2 => {
              this.waitUsers[userId] = user
              this.allUsers[userId] = user
              this.link = {
                url: '',
                text: ''
              }
            })
        })

    },
    validUrl (str) {
      if (str === '') {
        return false
      }
      try {
        new URL(str);
      } catch (_) {
        return false;
      }
      return true;
    },
    getUserIdFromUrl (url) {
      if (!this.validUrl(url)) {
        return ''
      }
      if (url.endsWith('/')) {
        url = url.substring(0, url.length - 1)
      }
      url = url.replace('https://www.flickr.com/photos/', '')
      url = url.replace('https://www.flickr.com/people/', '')
      if (url.indexOf('/') > 0) {
        url = url.substring(0, url.indexOf('/'))
      }
      return url
    },
  }
}
</script>

<style scoped>
.mbtn span {
  vertical-align: middle;
}
.show_form {
  position: fixed;
  z-index: 1000;
  background-color: #f3f3f3;
  width: 99%;
  height: 210px;
  top: 60px;
  padding: 15px;
}
.mt-210 {
  margin-top: 210px;
}
</style>
