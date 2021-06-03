<template>
  <div class="row">
    <div class="col-7">

      <nuxt-link target="_blank" :to="{ path: '/flickr/detail', query: { userId: user.user_id }}">
        <span>{{ user.user_id }}</span>
      </nuxt-link>
      <b class="badge badge-info" v-if="validUsername">{{ user.realname }}</b>

      <a target="_blank" :href="`https://www.flickr.com/photos/${user.user_id}`" ><i class="fa fa-flickr"></i></a>
      <span v-if="totalVideos > 0"><i class="fa fa-video"></i></span>
      <ShowAvatar v-if="user.avatar" :user="user" />

    </div>
    <div class="col-5">
      <DownloadImagesButton v-if="pages.length > 0"
                            :pages="pages"
                            :userId="userId"
      />

      <a v-if="status != 'pending_actions'" href="javascript:;" @click="retryDownload" ><i class="fa fa-sync"></i></a>
      <b-badge variant="info">{{user.totalImgs}}</b-badge>
      <b-badge variant="info"><span class="material-icons md-n">{{ status }}</span></b-badge>
      <a href="javascript:;" @click="removeThisUser" ><span class="material-icons md-n">delete</span></a>
    </div>
  </div>
</template>

<script>
import DownloadImagesButton from './downloadImageLinks'
import ShowAvatar from './showAvatar'

export default {
  components: {
    DownloadImagesButton,
    ShowAvatar
  },
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
      userId: '',
      pages: [],
      totalVideos: 0,
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
  mounted() {
    this.loadPages(() => {
      this.totalVideos = this.pages.filter(page => page.indexOf('video') > 0 ).length
    })
  },
  methods: {
    loadPages (callback) {
      this.$axios.$get(`/${this.userId}_pageInfo`).then(res => {
        if (res.type !== 'success') {
          return
        }
        this.pages = res.data
        callback()
      })
    },
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
