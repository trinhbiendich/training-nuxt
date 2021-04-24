<template>
  <div >
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
  props: {

  },
  data () {
    return {
      pageInfo: {
        title: "Detail page"
      },
      user: {},
      imgs: [],
    }
  },
  created() {

    console.log("created")
  },
  mounted() {
    let userId = this.$route.query.userId
    this.pageInfo.title = 'Detail of ' + userId
    this.$axios.$get(`/${userId}`).then(res => {
      if (res.type === 'error') {
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
    console.log("mounted")
  },
  methods: {

  },
}
</script>

<style scoped>

</style>
