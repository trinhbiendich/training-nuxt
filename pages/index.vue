<template>
  <div class="container">
    <button class="btn btn-success" @click="axiosPool">Test Request Pool</button>
    <div class="alert alert-info">{{ processed }} / {{ total }} in process {{ processing }}</div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.pageInfo.title === "" ? "NuxtJS" : "NuxtJS | " + this.pageInfo.title
    }
  },
  data() {
    return {
      pageInfo: {
        title: ""
      },
      urlTest: 'http://localhost/info.php',


      maxRequest: 10,
      processing: 0,
      processed: 0,

      dataset: [],
      total: 200,
      index: 0,

      pid: null,

    }
  },
  methods: {
    axiosPool () {
      let processQueue = {}
      this.pid = setInterval(() => {
        this.processing = Object.keys(processQueue).length
        if (this.processed >= this.total) {
          clearInterval(this.pid)
          return
        }
        if (this.processing >= this.maxRequest) {
          return
        }
        let id = Math.random()
        processQueue[id] = this.$axios.$get(this.dataset[this.total])
          .then(res => {
            console.log(id, res)
          }).finally(() => {
            delete processQueue[id]
            this.processed++
          })
        this.index++
      }, 100)
    }
  }
}
</script>

<style scoped>

</style>
