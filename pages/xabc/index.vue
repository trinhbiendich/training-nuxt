<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-md-4 col-lg-3">
        <span class="menu-item" v-for="path in paths" @click="loadData(path)">{{path}}</span>
      </div>
      <div class="col-xs-12 col-md-8 col-lg-9">
        <div v-for="img in imgs" class="img-item"><img :src="img" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.fetchPaths()
  },
  data() {
    return {
      paths: [],
      mystyle: {width: '0px'},
      imgs: []
    }
  },
  computed: {

  },
  methods: {
    async loadData (base_path) {
      let url = `https://api.opencms.codes/${base_path}`
      let res = await fetch(url)
      let data = await res.json()
      if (data.type === "success") {
        let fetches = []
        for(let k in data.data) {
          if (k === 'links') {
            continue
          }
          fetches.push(fetch(`https://api.opencms.codes/${base_path}_${k}`)
                                  .then(res => res.ok && res.json() || Promise.reject(res)))
          if (fetches.length >=10) {
            break
          }
        }

        if (fetches.length > 0) {
          Promise.all(fetches).then(data => {
            let tmpImgs = []
            for(let i=0; i<data.length; i++) {
              let itemData = data[i].data
              for(let imgIdx=0; imgIdx < itemData.imgs.length; imgIdx++) {
                let imgUrl = itemData.imgs[imgIdx]
                if (tmpImgs.indexOf(imgUrl) < 0) {
                  tmpImgs.push(imgUrl)
                }
              }
            }
            this.imgs = tmpImgs
            console.log(this.imgs)
          })
        }
      }
    },
    async fetchPaths() {
      let pathMatch = this.$route.params.pathMatch
      let url = `https://api.opencms.codes/td/paths`
      let res = await fetch(url)
      let data = await res.json()
      if (data.type === "success") {
        this.paths = data.data;
      }
    }
  }
}
</script>

<style scoped>
.menu-item {
  display: block;
  background: azure;
  text-underline: none;
  padding: 5px;
  border-bottom: 1px dotted gray;
  text-decoration: none;
  cursor: pointer;
}
</style>
