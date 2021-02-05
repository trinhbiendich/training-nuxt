<template>
  <div>{{$route.params}} {{$route.query}}</div>
</template>

<script>
export default {
  name: "AdminManager",
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
      let res = await fetch(`https://test.opencms.codes/cake/api/sites/${pathMatch}`);
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
