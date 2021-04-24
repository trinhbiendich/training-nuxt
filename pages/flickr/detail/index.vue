<template>
  <div>detail here {{ user }}</div>
</template>

<script>
export default {
  props: {

  },
  data () {
    return {
      user: {}
    }
  },
  created() {
    let userId = this.$route.query.userId
    this.$axios.$get(`/${userId}`).then(res => {
      if (res.type === 'error') {
        return
      }
      this.user = res.data
    })
    console.log("created")
  },
  mounted() {
    console.log("mounted")
  },
  methods: {
    asyncData() {
      this.$axios.$get('/test').then(res => {
        console.log(res)
      })
      this.$axios.$delete('/test/111').then(res => console.log(res))
    }
  },
}
</script>

<style scoped>

</style>
