<template>
  <div :class="className">
    <h1>{{moduleName}}</h1>
    <div v-for="item in data">
      <div>Title: {{item.title}}</div>
      <div>Desc: {{item.description}}</div>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListArticle",
  props: {
    moduleName: String,
    className: String,
    data: {
      type: Array,
      defaut: []
    }
  },
  mounted() {
    console.log(this.moduleName, this.data);
  },
  methods: {
    test() {

    }
  }
}
</script>

<style scoped>

</style>
