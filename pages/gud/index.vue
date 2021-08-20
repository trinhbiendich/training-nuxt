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
      Load more (<span v-text="finalImages.length" /> images left)
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
      imageURlOnly: [],
      finalImages: [],
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
      this.imageURlOnly = this.images.map(item => item.image_url)
      console.log("init all image done")
      const imgs = await this.$localforage.images.keys()
      console.log("init final data done")
      this.finalImages = this.shuffle(imgs.filter(img => this.imageURlOnly.indexOf(img) < 0))
      this.msg = `${this.finalImages.length}/${this.images.length}`
    },
    async downloadAllImages () {
      let jobs = [];
      let doneIndx = 0;
      this.onLoading2 = false;
      for (let i=0; i<this.images.length; i++) {
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
      if (!this.finalImages || this.finalImages.length === 0) {
        return
      }
      this.onLoading = false;
      let allImgs = [];
      for (let i=0; i < 100; i++) {
        allImgs.push(this.getImage({image_url: this.finalImages.pop(), image_date: null}));
      }
      const imgs = await Promise.all(allImgs)
      this.onLoading = true;
      this.caching = [... this.caching, ...imgs]
    },
    async getImages () {
      if (!this.$route.query.year) {
        this.images = [];
        return
      }
      const e = await fetch(`/jsons/${this.$route.query.year}.json`);
      if (e.ok) {
        const imgs = await e.json();
        this.images = this.shuffle(imgs)
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
    async getImage(img) {
      let obj = await this.$localforage.images.getItem(img.image_url);
      if (obj != null) {
        return this.imgUrlFromBytes(obj);
      }
      const e = await fetch('https://cdn.bolacmuito.xyz/ximg.php?url=' + img.image_url);
      const a = await e.arrayBuffer();
      const s = e.headers.get("content-type");
      obj = {
        buffer: a,
        bufferType: s,
        date: img.image_date,
        year: this.$route.query.year,
        path: img.image_url,
      }
      await this.$localforage.images.setItem(img.image_url, obj)
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
