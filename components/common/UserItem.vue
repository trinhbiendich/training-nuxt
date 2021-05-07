<template>
  <div class="row">
    <div class="col-7">
      <b v-if="validUsername">{{ user.realname }}</b>
      <nuxt-link target="_blank" class="badge badge-info" :to="{ path: '/flickr/detail', query: { userId: user.user_id }}">
        <i class="fa fa-images"></i>
        <span>{{ user.user_id }}</span>
      </nuxt-link>

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
    collectData (dataset, xstorage, total, indx, cb) {
      if (indx >= total) {
        cb()
        this.onDownloading = false
        return
      }
      this.msg = `(${indx}/${total})`
      let photoId = dataset[indx]
      this.$axios.$get(`/${this.userId}_photos_${photoId}`)
        .then(resOfPhoto => {
          if (resOfPhoto.type !== 'success') {
            //no thing
          } else {
            const img = resOfPhoto.data
            const types = ["sq", "q", "t", "s", "n", "w", "m", "z", "c", "l", "h", "k", "3k", "4k", "5k", "6k", "o"].reverse()
            for(let i=0; i<types.length; i++) {
              let type = types[i]
              if (img[`url_${type}`] === undefined) {
                continue
              }

              if (img[`url_${type}`] !== undefined) {
                xstorage.push(img[`url_${type}`])
                break
              }
            }
          }
          this.collectData(dataset, xstorage, total, indx+1, cb)
        })
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
          let xstorage = []
          this.collectData(photoIds, xstorage, photoIds.length, 0, () => {
            var blob = new Blob([xstorage.join('\n')], {type: "text/plain;charset=utf-8"});
            saveAs(blob, `imgs_${this.userId}.txt`);
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
