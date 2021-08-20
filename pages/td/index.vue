<template>
  <div>
    <a href="?year=2019" class="btn" :class="{'btn-success': $route.query.year == 2019, 'btn-primary': $route.query.year != 2019}">2019</a>
    <a href="?year=2020" class="btn" :class="{'btn-success': $route.query.year == 2020, 'btn-primary': $route.query.year != 2020}">2020</a>
    <a href="?year=2021" class="btn" :class="{'btn-success': $route.query.year == 2021, 'btn-primary': $route.query.year != 2021}">2021</a>
    <div id="myGallery">
      <a v-for="image in caching" :key="image" target="_blank" :href="image">
        <img class="img-fluid lazy" :src="image" />
      </a>
    </div>
    <a class="btn btn-primary" href="javascript:;" @click="loadingImgs()">
      Load more (<span v-text="images.length" /> images left)
      <i class="fa fa-spinner fa-spin" :class="{'hidden': onLoading}"></i>
    </a>
    <a href="javascript:;" @click="scrollToTop()" class="btn btn-success">Go to Top <i class="fas fa-arrow-up"></i></a>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data () {
    return {
      images: [],
      caching: [],
      onLoading: true,
      testUrl: '',
      msg: '',
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init () {
      await this.getImages()
      console.log("init all image done")
      this.msg = `0/${this.images.length}`
    },
    scrollToTop() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    },
    async loadingImgs () {
      await this.nextItems();
      this.$nextTick(() => {
        $('#myGallery').justifiedGallery({
          rowHeight: 300,
          lastRow: 'nojustify',
          margins: 3
        }).on('jg.complete', function () {
          ///
        })
      })
    },
    async nextItems () {
      if (!this.images || this.images.length === 0) {
        return
      }
      this.onLoading = false;
      let imgs = [];
      for (let i=0; i < 500; i++) {
        imgs.push(this.images.pop());
      }
      this.onLoading = true;
      this.caching = imgs
    },
    async getImages () {
      if (!this.$route.query.year) {
        this.images = [];
        return
      }
      const e = await fetch(`/jsons/urls.${this.$route.query.year}.json`);
      if (e.ok) {
        this.images = await e.json();
      } else {
        this.images = []
      }
    },
  }
}
</script>

<style scoped>

</style>
