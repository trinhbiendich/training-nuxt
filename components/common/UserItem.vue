<template>
  <div class="row">
    <div class="col-7">
      <b v-if="validUsername">{{ user.realname }}</b>
      <nuxt-link target="_blank"
                 :to="{ path: '/flickr/detail', query: { userId: user.user_id }}">
        <i v-if="validUsername" class="fa fa-images"></i>
        <span v-else >{{ user.user_id }}</span>
      </nuxt-link>

      <a target="_blank" :href="`https://www.flickr.com/photos/${user.user_id}`" ><i class="fa fa-flickr"></i></a>
    </div>
    <div class="col-5">
      <a v-if="status != 'pending_actions'" href="javascript:;" @click="retryDownload" ><i class="fa fa-sync"></i></a>
      <b-badge variant="info">{{user.totalImgs}}</b-badge>
      <b-badge variant="info"><span class="material-icons md-n">{{ status }}</span></b-badge>
      <a href="javascript:;" @click="removeThisUser" ><span class="material-icons md-n">delete</span></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserItem",
  props: {
    user: {
      type: [Object, Array],
    },
    status: {
      type: String,
      default () {
        return 'wait'
      }
    }
  },
  computed: {
    validUsername () {
      return this.user.realname != undefined && this.user.realname != ''
    }
  },
  methods: {
    removeThisUser () {
      this.$emit('handleOnDeleteUser', this.user)
    },
    retryDownload () {
      switch (this.status) {
        case "task_alt":
          this.$emit('handleRetry', this.user, 'done')
          break
        case "dangerous":
          this.$emit('handleRetry', this.user, 'delete')
          break
      }
    },
  }
}
</script>

<style scoped>
.material-icons.md-n { font-size: 1em; }
.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }
</style>
