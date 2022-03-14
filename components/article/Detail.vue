<template>
  <div >
    <a class="btn btn-outline-primary mt-3 mb-3" href="/" >Quay lại <i class="fa fa-reply-all"></i></a>
    <hr />
    <h3 class="title mb-4">{{article.title}}</h3>
    <div v-html="article.fullDesc"></div>
    <iframe v-for="document in article.documents" :key="document" :src="document" v-if="article.documents.length > 0"></iframe>
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
iframe {
  width: 100%;
  min-height: 600px;
}
</style>
