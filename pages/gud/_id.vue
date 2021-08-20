<template>
  <div>
    <a @click="downloadAllImages()" href="javascript:;" class="btn btn-primary">Download all
      <i class="fa fa-download"></i>
      <i class="fa fa-spinner fa-spin" :class="{'hidden': onLoading2}"></i>
      <span v-if="msg" v-text="msg"></span>
    </a>
    <div id="myGallery">
      <a v-for="image in caching" :key="image" target="_blank" :href="image">
        <img class="img-fluid lazy" :src="image" />
      </a>
    </div>
    <a class="btn btn-primary" href="javascript:;" @click="loadingImgs">Load more
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
    this.getImages().then(res => {
      this.loadingImgs()
    })
  },
  methods: {
    async downloadAllImages () {
      let jobs = [];
      let doneIndx = 0;
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
      if (!this.images || this.images.length == 0) {
        return
      }
      this.onLoading = false;
      let allImgs = [];
      for (let i=0; i < 100; i++) {
        allImgs.push(this.getImage(this.images.pop()));
      }
      const imgs = await Promise.all(allImgs)
      this.onLoading = true;
      this.caching = [... this.caching, ...imgs]
    },
    async getImages () {
      const e = await fetch(`/jsons/urls.${this.$route.params.id}.json`);
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
