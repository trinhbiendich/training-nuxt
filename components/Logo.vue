<template>
  <div class="flex">
    <ListArticle moduleName="aaaaaaa" className="flex-1" :data="mountains" />
    <ListArticle moduleName="bbbbbbb" className="flex-1" :data="planets" />
  </div>
</template>

<script>
import ListArticle from "@/components/ListArticle";

export default {
  components: {ListArticle},
  beforeCreate() {
    console.log("beforeCreate");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  created() {
    console.log("created");
    this.fetchXXX();
  },
  mounted() {
    console.log("mounted");
  },
  data() {
    return {
      mountains: [],
      planets: []
    }
  },
  methods :{
    async fetchXXX() {
      let res1 = await fetch('https://api.bolacmuito.xyz/articles/mountains');
      let res2 = await fetch('https://api.bolacmuito.xyz/articles/planets');
      this.mountains = (await res1.json()).data;
      this.planets = (await res2.json()).data;

    }
  }
}
</script>
