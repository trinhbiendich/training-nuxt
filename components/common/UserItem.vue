<template>
  <div class="row">
    <div class="col-7">

      <nuxt-link target="_blank" :to="{ path: '/flickr/detail', query: { userId: user.user_id }}">
        <span>{{ user.user_id }}</span>
      </nuxt-link>
      <b class="badge badge-info" v-if="validUsername">{{ user.realname }}</b>

      <a target="_blank" :href="`https://www.flickr.com/photos/${user.user_id}`" ><i class="fa fa-flickr"></i></a>

      <span v-if="msg !== ''">{{msg}}</span>
    </div>
    <div class="col-5">
      <a href="javascript:;" @click="downloadImgLinks" >
        <i v-if="!onDownloading" class="fa fa-download"></i>
        <i v-if="onDownloading" class="fa fa-hourglass"></i>
      </a>
      <a v-if="status != 'pending_actions'" href="javascript:;" @click="retryDownload" ><i class="fa fa-sync"></i></a>
      <b-badge variant="info">{{user.totalImgs}}</b-badge>
      <b-badge variant="info"><span class="material-icons md-n">{{ status }}</span></b-badge>
      <a href="javascript:;" @click="removeThisUser" ><span class="material-icons md-n">delete</span></a>
    </div>
  </div>
</template>

<script>
import { saveAs } from 'file-saver'

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
  data () {
    return {
      onDownloading: false,
      userId: '',
      msg: '',

      poolInfo: {
        max: 20,
        inProcess: 0,
        done: 0,
        pid: null,
      },

      reqsInfo: {
        dataset: [],
        total: 200,
        index: 0,
      },
    }
  },
  computed: {
    validUsername () {
      return this.user.realname != undefined && this.user.realname != ''
    }
  },
  created() {
    this.userId = this.user.user_id
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

    axiosPool (callback) {
      let processQueue = {}
      let storage = []
      this.poolInfo.pid = setInterval(() => {
        this.poolInfo.inProcess = Object.keys(processQueue).length
        this.msg = `(${this.poolInfo.done}/${this.reqsInfo.total}) - pool ${this.poolInfo.inProcess}`
        if (this.poolInfo.done >= this.reqsInfo.total) {
          clearInterval(this.poolInfo.pid)
          this.msg = ''
          callback(storage)
          return
        }
        if (this.poolInfo.inProcess >= this.poolInfo.max) {
          return
        }
        let id = Math.random()
        let photoId = this.reqsInfo.dataset[this.reqsInfo.index]
        processQueue[id] = this.$axios.$get(`/${this.userId}_photos_${photoId}`)
          .then(res => {
            const imgData = res.data
            const maxUrl = this.getMaxImgUrl(imgData)
            if (maxUrl !== '') {
              storage.push(maxUrl)
            }
          }).finally(() => {
            delete processQueue[id]
            this.poolInfo.done++
          })
        this.reqsInfo.index++
      }, 100)
    },
    getMaxImgUrl (img) {
      const types = ["sq", "q", "t", "s", "n", "w", "m", "z", "c", "l", "h", "k", "3k", "4k", "5k", "6k", "o"].reverse()
      let url = ''
      for(let i=0; i<types.length; i++) {
        let type = types[i]
        if (img[`url_${type}`] === undefined) {
          continue
        }

        if (img[`url_${type}`] !== undefined) {
         url = img[`url_${type}`]
          break
        }
      }
      return url
    },
    downloadImgLinks () {
      this.$axios.$get(`/${this.userId}_photos`)
        .then(res => {
          if (res.type !== 'success') {
            return
          }
          this.onDownloading = true
          let photoIds = res.data
          if (typeof(photoIds) === 'object') {
            photoIds = Object.values(photoIds)
          }
          this.reqsInfo.dataset = photoIds
          this.reqsInfo.total = photoIds.length
          this.reqsInfo.index = 0

          this.poolInfo.done = 0
          this.poolInfo.inProcess = 0
          this.onDownloading = true

          this.axiosPool((storage) => {
            const blob = new Blob([storage.join('\n')], {type: "text/plain;charset=utf-8"});
            saveAs(blob, `images_${this.userId}.txt`);
            this.onDownloading = false
          })
        })
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
