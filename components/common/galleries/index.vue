<template>
  <div ref="myGallery" id="myGallery">
    <div v-for="(img, idx) in images" :key="'img_' + idx" class="img-item">
      <div class="control">
        <a target="_blank" :href="urlMax(img)" class="btn btn-info">
          <i class="fa fa-eye"></i>
        </a>
        <a v-if="getThumbnails().indexOf(urlMax(img)) < 0" href="javascript:;" class="btn btn-success" @click="addToThumbnail(img)" title="Add to thumbnail">
          <i class="fa fa-plus"></i>
        </a>
        <a v-if="user.avatar !== urlMax(img)" href="javascript:;" class="btn btn-success" @click="chooseAsAvatar(img)" title="Choose as Avatar">
          <i class="fa fa-check-circle-o" aria-hidden="true"></i>
        </a>
      </div>
      <img class="img-fluid lazy" :src="urlMin(img, 300)" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: Array,
    user: Object,
  },
  methods: {
    getThumbnails () {
      if (this.user.thumbnails === undefined) {
        return []
      }
      return this.user.thumbnails
    },
    chooseAsAvatar (image) {
      this.user.avatar = this.urlMax(image)
      this.$axios.$post(`/users/${this.user.user_id}`, this.user).then(res => {
        console.log(res)
      })
      this.$axios.$post(`/users_done/${this.user.user_id}`, this.user).then(res => {
        console.log(res)
      })
    },
    addToThumbnail (image) {
      if (this.user.thumbnails === undefined) {
        this.user.thumbnails = []
      }
      this.user.thumbnails.push(this.urlMax(image))
      this.$axios.$post(`/users/${this.user.user_id}`, this.user).then(res => {
        console.log(res)
      })
      this.$axios.$post(`/users_done/${this.user.user_id}`, this.user).then(res => {
        console.log(res)
      })
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
      if (img.media === 'video') {
        return `https://www.flickr.com/photos/${this.userId}/${img.id}/in/datetaken/`
        //return `https://www.flickr.com/video_download.gne?id=${img.id}`
      }
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
  }
}
</script>

<style scoped>
.control {
  position: relative;
  z-index: 10;
}
</style>
