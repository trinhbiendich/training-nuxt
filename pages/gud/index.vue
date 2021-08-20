<template>
  <div>
    <a @click="downloadAllImages()" href="javascript:;" class="btn btn-primary">
      <i class="fa fa-download"></i>
      <i class="fa fa-spinner fa-spin" :class="{'hidden': onLoading2}"></i>
      <span v-if="msg" v-text="msg"></span>
    </a>
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
      onLoading2: true,
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
    async downloadAllImages () {
      let jobs = [];
      let doneIndx = 0;
      this.onLoading2 = false;
      for (let i=this.images.length - 1; i > 0; i--) {
        jobs.push(this.getImage(this.images[i]))
        if (jobs.length >= 50) {
          let res = await Promise.all(jobs);
          doneIndx += jobs.length;
          this.msg = `${doneIndx}/${this.images.length}`
          jobs = []
        }
      }
      if (jobs.length > 0) {
        let res = await Promise.all(jobs);
        doneIndx += jobs.length;
        this.msg = `${doneIndx}/${this.images.length}`
        jobs = []
      }
      this.onLoading2 = true;
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
      let imgJobs = [];
      let imgs = [];
      for (let i=0; i < 500; i++) {
        imgJobs.push(this.getImage(this.images.pop()));
        if (imgJobs.length >= 20) {
          const tmp = await Promise.all(imgJobs)
          imgs = [...imgs, ...tmp]
          imgJobs = []
        }
      }
      if (imgJobs.length > 0) {
        const tmp = await Promise.all(imgJobs)
        imgs = [...imgs, ...tmp]
        imgJobs = []
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
    shuffle(array) {
      let currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    },
    async getImage(imgUrl) {
      let obj = await this.$localforage.images.getItem(imgUrl);
      if (obj != null) {
        return this.imgUrlFromBytes(obj);
      }
      const e = await fetch('https://cdn.bolacmuito.xyz/ximg.php?url=' + imgUrl);
      const a = await e.arrayBuffer();
      const s = e.headers.get("content-type");
      obj = {
        buffer: a,
        bufferType: s,
        year: this.$route.query.year,
        path: imgUrl,
      }
      await this.$localforage.images.setItem(imgUrl, obj)
      return this.imgUrlFromBytes(obj);
    },
    imgUrlFromBytes (obj) {
      return URL.createObjectURL(new Blob([obj.buffer], {
        type: obj.bufferType
      }));
    }
  }
}
</script>

<style scoped>

</style>
