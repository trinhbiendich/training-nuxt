<template>
  <div >
    <div class="row">
      <div class="col-12 p-3">
        <router-link class="btn btn-success" to="/flickr"><i class="fa fa-reply"></i> Go back</router-link>
        <a href="javascript:;" class="btn btn-primary"><i class="fa fa-download"></i> Download</a>
      </div>
      <div class="col-12 p-3">
        <a v-for="page in pages"
           :key="page" href="javascript:;"
           class="badge mr-2"
           :class="{'badge-success': page === focusPage, 'badge-info': page !== focusPage}"
           @click="loadImageForPage(page)">{{ page }}</a>
      </div>
    </div>
    <div v-if="msg !== ''">
      <div class="alert alert-info">{{ msg }}</div>
    </div>

    <Galleries :user="user" :images="imgs" />

    <div v-if="isLoading" ref="loading" class="loading center-screen"></div>
    <div class="center">
      <a v-if="curPage <= totalPage" class="btn btn-success" @click="loadImagesFromServer">Load more</a>
    </div>
  </div>
</template>

<script>
import Galleries from '@/components/common/galleries'

export default {
  components: {
    Galleries,
  },
  head() {
    return {
      title: this.pageInfo.title === "" ? "NuxtJS" : this.pageInfo.title
    }
  },
  data () {
    return {
      pageInfo: {
        title: "Detail page"
      },
      user: {},
      imgs: [],
      photoIds: [],
      msg: '',
      userId: '',
      curPage: 1,
      perPage: 50.0,
      totalPage: 1,
      curTotalImages: 0,
      isLoading: false,
      pages: [],
      focusPage: '',
    }
  },
  mounted() {
    this.userId = this.$route.query.userId
    let tempFocusPage = ''
    if (this.$route.query.page !== undefined && this.$route.query.page !== '') {
      tempFocusPage = this.$route.query.page
    }
    this.pageInfo.title = 'Detail of ' + this.userId

    this.loadUserInfo()

    this.loadPages(() => {
      if (tempFocusPage === '') {
        tempFocusPage = this.pages[0]
      }
      this.loadImageForPage(tempFocusPage)
    })

  },
  methods: {
    loadImageForPage (page) {
      if (page === this.focusPage) {
        return
      }
      this.$router.replace({ query: {userId: this.userId, page: page}})
      this.isLoading = true
      this.photoIds = []
      this.curPage = 1
      this.totalPage = 1
      this.imgs = []
      this.curTotalImages = 0
      this.focusPage = page
      this.$axios.$get(`/${this.userId}${page}`)
        .then(res => {
          if (res.type !== 'success') {
            return
          }
          this.photoIds = res.data

          let totalPhotosId = 0
          if (typeof(this.photoIds) === 'object') {
            totalPhotosId = Object.keys(this.photoIds).length
            this.photoIds = Object.values(this.photoIds)
          } else {
            totalPhotosId = this.photoIds.length
          }

          this.totalPage = Math.ceil(totalPhotosId / this.perPage)

          this.loadImagesFromServer()
        })
    },
    loadUserInfo () {
      this.$axios.$get(`/users/${this.userId}`).then(res => {
        if (res.type !== 'success') {
          this.msg = 'There are no images or data on this user'
          return
        }
        this.user = res.data

        const displayName = this.user.realname !== '' ? this.user.realname : this.user.username
        this.pageInfo.title = `[${this.userId}] - ${displayName}`
      })
    },
    loadPages (callback) {
      this.$axios.$get(`/${this.userId}_pageInfo`).then(res => {
        if (res.type !== 'success') {
          this.msg = 'There are no images or data on this user'
          return
        }
        this.pages = res.data
        callback()
      })
    },
    loadImagesFromServer () {
      if (this.curPage > this.totalPage) {
        return
      }
      let counter = 0
      const offset = (this.curPage - 1) * this.perPage
      const nextOffset = offset + this.perPage
      this.isLoading = true
      let photoIds = this.photoIds.slice(offset, nextOffset)
      this.curPage++
      this.curTotalImages += photoIds.length
      photoIds.forEach((photoId, idx) => {
        this.$axios.$get(`/photos_${photoId}`)
          .then(resOfPhoto => {
            counter++;

            this.addImage(resOfPhoto)

            if (counter >= photoIds.length) {
              this.isLoading = false
              this.$nextTick(() => {
                $('#myGallery').justifiedGallery({
                  rowHeight : 300,
                  lastRow : 'nojustify',
                  margins : 3
                })
              })

            }
          })
      })
    },
    addImage (res) {
      if (res.type !== 'success') {
          return
      }
      this.imgs.push(res.data)
    },
  },
}
</script>

<style scoped>
.center {
  text-align: center;
}
.center-screen {
  position: fixed;
  top: 45%;
  left: 45%;
}
.loading {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
