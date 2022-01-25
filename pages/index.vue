<template>
  <div class="container mt-2">
    <ListArticle v-show="article == null" @showDetail="onShow"></ListArticle>
    <article-detail v-if="article != null" :article="article" @goback="onGoBack" ></article-detail>
  </div>
</template>

<script>
import ListArticle from "@/components/article/List";
import ArticleDetail from "@/components/article/Detail";
export default {
  components: {ListArticle, ArticleDetail},
  data () {
    return {
      article: null,
    }
  },
  methods: {
    onShow(article) {
      this.article = article
    },
    onGoBack () {
      this.article = null
    }
  }
}
</script>

<style scoped>
.news-item {

}
</style>
