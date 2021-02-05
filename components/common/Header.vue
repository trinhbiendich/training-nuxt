<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <NuxtLink class="navbar-brand"  to="/">Training NuxtJs</NuxtLink>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li :class="'nav-item '" v-for="item in links">
          <a class="nav-link" :href="'/articles/' + item.path">{{item.text}} <span class="sr-only">(current)</span></a>
        </li>
      </ul>
    </div>
    header here
  </nav>
</template>

<script>
export default {
  name: "Header",
  beforeCreate() {
  },
  mounted() {
    this.fetchMenus();
  },
  created() {

  },
  data() {
    return {
      links: []
    }
  },
  methods: {
    async fetchMenus() {
      let res = await fetch('https://test.opencms.codes/cake/api/menu');
      let data = await res.json();
      if (data.type === "success") {
        this.links = data.data;
      }
      console.log(this.links);
    }
  }
}
</script>

<style scoped>

</style>
