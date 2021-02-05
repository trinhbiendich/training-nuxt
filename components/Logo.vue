<template>
  <div class="flex">
    <ListArticle moduleName="aaaaaaa" className="flex-1" :data="mountains" />
    <ListArticle moduleName="bbbbbbb" className="flex-1" :data="planets" />
  </div>
</template>

<script>
import ListArticle from "@/components/ListArticle";
import {forkJoin} from "rxjs";
import {ajax} from "rxjs/ajax";

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
      forkJoin({
        wait2Second: ajax.getJSON('https://opencms.codes/api/?name=mountains&wait=2'),
        wait5Second: ajax.getJSON('https://opencms.codes/api/?name=planets&wait=5')
      }).subscribe(res => {
        this.mountains = res.wait2Second;
        this.planets = res.wait5Second;
      });


      //this.mountains = await fetch('').then(res => res.json());
      //this.planets = await fetch('').then(res => res.json());

    }
  }
}
</script>
