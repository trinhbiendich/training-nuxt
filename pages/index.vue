<template>
  <div class="container">
    <NuxtLink to="/">{{this.pageInfo.title}}</NuxtLink>
  </div>
</template>

<script>
import Logo from "~/components/Logo";
export default {
  components: {Logo},
  head() {
    return {
      title: this.pageInfo.title === "" ? "NuxtJS" : "NuxtJS | " + this.pageInfo.title
    }
  },
  mounted() {
    this.fetchPageInfo();
  },
  data() {
    return {
      pageInfo: {
        title: ""
      }
    }
  },
  methods: {
    async fetchPageInfo() {
      let pathMatch = this.$route.params.pathMatch;
      this.$axios.get(`/sites/${pathMatch}`)
        .then(res => {
          if (res.data.type === "success") {
            this.pageInfo = res.data.data;
          }
        })
    },
    checkLoginState() { },
  }
}
</script>

<style scoped>

</style>
