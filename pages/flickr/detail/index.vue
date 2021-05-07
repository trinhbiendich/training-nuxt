<template>
  <div >
    <div class="row">
      <div class="col-12 p-3">
        <router-link to="/flickr"><span class="material-icons">reply</span> Go back</router-link>
        <span class="material-icons">autorenew</span>
      </div>
    </div>
    <div v-if="msg !== ''">
      <div class="alert alert-info">{{ msg }}</div>
    </div>
    <div ref="myGallery" id="myGallery">
      <a v-for="(img, idx) in imgs" :key="'img_' + idx" :href="urlMax(img)" class="img-item">
        <img class="img-fluid lazy" :src="urlMin(img, 300)" />
      </a>
    </div>
    <div v-if="isLoading" ref="loading" class="loading center-screen"></div>
    <div class="center">
      <a class="btn btn-success" @click="loadImagesFromServer">Load more</a>
    </div>
  </div>
</template>

<script>

export default {
  head() {
    return {
      title: this.pageInfo.title === "" ? "NuxtJS" : "NuxtJS | " + this.pageInfo.title
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
      perPage: 50,
      totalPage: 1,
      curTotalImages: 0,
      isLoading: false,
    }
  },
  mounted() {
    this.userId = this.$route.query.userId
    this.pageInfo.title = 'Detail of ' + this.userId
    this.$axios.$get(`/${this.userId}`).then(res => {
      if (res.type !== 'success') {
        this.msg = 'There are no images or data on this user'
        return
      }
      this.user = res.data
    })
    this.isLoading = true
    this.$axios.$get(`/${this.userId}_photos`)
      .then(res => {
        if (res.type !== 'success') {
          return
        }
        this.photoIds = res.data

        let totalPhotosId = 0
        if (typeof(this.photoIds) === 'object') {
          totalPhotosId = Object.keys(this.photoIds).length
        } else {
          totalPhotosId = this.photoIds.length
        }

        this.totalPage = Math.ceil(totalPhotosId / (this.perPage * 1.0))

        this.loadImagesFromServer()
      })
  },
  methods: {
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
        this.$axios.$get(`/${this.userId}_photos_${photoId}`)
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
    urlMin (img, minWidth = null) {
      const types = ["sq", "q", "t", "s", "n", "w", "m", "z", "c", "l", "h", "o"]

      for(let i=0; i<types.length; i++) {
        let type = types[i]
        if (img[`url_${type}`] === undefined) {
          continue
        }

        if (minWidth !== null && img[`width_${type}`] < minWidth) {
          continue
        }

        if (img[`url_${type}`] !== undefined) {
          return img[`url_${type}`]
        }
      }

      return '/images/no-image.png'
    },
    urlMax (img, maxWidth = null) {
      const types = ["sq", "q", "t", "s", "n", "w", "m", "z", "c", "l", "h", "k", "3k", "4k", "5k", "6k", "o"].reverse()

      for(let i=0; i<types.length; i++) {
        let type = types[i]
        if (img[`url_${type}`] === undefined) {
          continue
        }

        if (maxWidth !== null && img[`width_${type}`] > maxWidth) {
          continue
        }

        if (img[`url_${type}`] !== undefined) {
          return img[`url_${type}`]
        }
      }
      return '/images/no-image.png'
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
