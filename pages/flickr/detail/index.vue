<template>
  <div >
    <router-link to="/flickr"><span class="material-icons">reply</span> Go back</router-link>
    <div v-if="msg !== ''">
      <div class="alert alert-info">{{ msg }}</div>
    </div>
    <div id="myGallery">
      <a v-for="(img, idx) in imgs" :key="'img_' + idx" :href="img" class="img-item">
        <img class="img-fluid lazy" :src="img" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.pageInfo.title === "" ? "Training NuxtJS" : "Training NuxtJS | " + this.pageInfo.title
    }
  },
  data () {
    return {
      pageInfo: {
        title: "Detail page"
      },
      user: {},
      imgs: [],
      msg: '',
    }
  },
  mounted() {
    let userId = this.$route.query.userId
    this.pageInfo.title = 'Detail of ' + userId
    this.$axios.$get(`/${userId}`).then(res => {
      if (res.type !== 'success') {
        this.msg = 'There are no images or data on this user'
        return
      }
      this.user = res.data
      for(let photoId in this.user) {
        this.imgs.push(this.user[photoId]['url_k'])
      }
      this.$nextTick(() => {
        $('#myGallery').justifiedGallery({
          rowHeight : 300,
          lastRow : 'nojustify',
          margins : 3
        })
      })
    })
  },
  methods: {

  },
}
</script>

<style scoped>

</style>
