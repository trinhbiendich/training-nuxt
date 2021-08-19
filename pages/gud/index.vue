<template>
  <div>
    <div id="myGallery">
      <a v-for="image in caching" :key="image" :href="image">
        <img class="img-fluid lazy" :src="image" />
      </a>
    </div>
    <a class="btn btn-primary" href="javascript:;" @click="loadingImgs">Load more</a>
  </div>
</template>

<script>
import logger from "@/server-middleware/logger";

export default {
  data () {
    return {
      images: [],
      caching: [],
    }
  },
  mounted() {

    this.getImages().then(res => {
      this.loadingImgs()
      console.log(this.getImage('https://cdn.bolacmuito.xyz/ximg.php?url=' + this.images[0]))
    })
  },
  methods: {
    loadingImgs () {
      this.nextItems();
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
    nextItems () {
      for (let i=0; i < 100; i++) {
        this.caching.push(this.images.pop());
      }
    },
    async getImages () {
      const e = await fetch('/jsons/urls.2021.json');
      this.images = await e.json();
    },
    async getImage(t) {
      const e = await fetch(t, {
        cache: "no-store",
        headers: {
          Origin: "https://cuutruyen.net",
          "Cache-Control": "no-cache",
          Pragma: "no-cache"
        }
      });
      const a = await e.arrayBuffer();
      const s = e.headers.get("content-type");
      return {
        buffer: a,
        bufferType: s
      }
    }
  }
}
</script>

<style scoped>

</style>
