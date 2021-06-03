<template>
  <a href="javascript:;" @click="downloadImgLinks" >
    <span v-if="msg !== ''">{{ msg }}</span>
    <i v-if="!onDownloading" class="fa fa-download"></i>
    <i v-if="onDownloading" class="fa fa-hourglass"></i>
  </a>
</template>

<script>
import { saveAs } from 'file-saver'
export default {
  props: {
    pages: {
      type: [Array, Object],
      default () {
        return []
      }
    },
    userId: String,
  },
  data () {
    return {
      onDownloading: false,

      reqsInfo: {
        dataset: [],
        total: 200,
        index: 0,
      },

      poolInfo: {
        max: 20,
        inProcess: 0,
        done: 0,
        pid: null,
      },

      msg: '',
    }
  },
  methods: {
    downloadImgLinks () {
      if (this.userId === '') {
        return
      }

      const allPagesRequestIds = this.pages
          .filter(page => page.indexOf('photos') > 0)
          .map(page => this.$axios.$get(`/${this.userId}${page}`))
      if (allPagesRequestIds.length <= 0) {
        return
      }

      Promise.all(allPagesRequestIds).then((res) => {
        if (res.length <= 0) {
          return
        }
        this.onDownloading = true
        const photoIds = []
        for(let i=0; i<res.length; i++) {
          let resItem = res[i]
          if (resItem.type !== 'success') {
            continue
          }
          let tempPhotoIds = resItem.data
          if (typeof(tempPhotoIds) === 'object') {
            tempPhotoIds = Object.values(tempPhotoIds)
          }
          photoIds.push.apply(photoIds, tempPhotoIds)
        }
        this.fetchImageLinkByPhotoIds(photoIds)
      })
    },
    fetchImageLinkByPhotoIds (photoIds) {
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
        if (photoId === undefined) {
          console.log(this.reqsInfo)
        }
        processQueue[id] = this.$axios.$get(`/photos_${photoId}`)
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
  }
}
</script>

<style scoped>

</style>
