<template>
  <div >
    <a class="btn btn-outline-primary mt-3 mb-3" @click="$emit('goback')" >Quay lại <i class="fa fa-reply-all"></i></a>
    <hr />
    <h3 class="title mb-4">{{article.title}}</h3>
    <div v-html="article.fullDesc"></div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 1.5em;
}
</style>
