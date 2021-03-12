<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <span class="menu-item" v-for="path in paths" @click="loadData(path)">{{path}}</span>
      </div>
      <div class="col-9">
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
      mystyle: {width: '0px'}
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
        console.log(data.data)
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
}
</style>
