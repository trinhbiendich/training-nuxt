<template>
  <div>
    <div id="myGallery">
      <a v-for="image in caching" :key="image" target="_blank" :href="image">
        <img class="img-fluid lazy" :src="image" />
      </a>
    </div>
    <a class="btn btn-primary" href="javascript:;" @click="loadingImgs">Load more
      <i class="fa fa-spinner fa-spin" :class="{'hidden': onLoading}"></i>
    </a>

  </div>
</template>

<script>
export default {
  data () {
    return {
      images: [],
      caching: [],
      onLoading: true,
      testUrl: '',
    }
  },
  mounted() {
    this.getImages().then(res => {
      this.loadingImgs()
    })
  },
  methods: {
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
        this.images = await e.json();
      } else {
        this.images = []
      }
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
