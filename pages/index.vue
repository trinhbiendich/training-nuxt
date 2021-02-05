<template>
  <div class="container">
    <NuxtLink to="/">{{this.pageInfo.title}}</NuxtLink>
    <Logo />
  </div>
</template>

<script>
import Logo from "~/components/Logo";
export default {
  components: {Logo},
  head() {
    return {
      title: this.pageInfo.title === "" ? "Training NuxtJS" : "Training NuxtJS | " + this.pageInfo.title
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
      let url = `https://test.opencms.codes/cake/api/sites/${pathMatch}`;
      let res = await fetch(url);
      let data = await res.json();
      if (data.type === "success") {
        console.log(data);
        this.pageInfo = data.data;
      }
    }
  }
}
</script>

<style scoped>

</style>
