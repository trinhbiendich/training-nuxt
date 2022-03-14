<template>
  <div class="container mt-2">
    <ListArticle v-show="article == null" @showDetail="onShow"></ListArticle>
    <article-detail v-if="article != null"
                    :article="article"
                    @goback="onGoBack" ></article-detail>
  </div>
</template>

<script>
import ListArticle from "~/components/article/List";
import ArticleDetail from "~/components/article/Detail";

export default {
  components: {ListArticle, ArticleDetail},
  data () {
    return {
      article: null,
    }
  },
  mounted() {
    let path = this.$route.path
    if (!path || path == '') {
      return
    }
    path = path.substring(9)
    if (!path || path == '') {
      return
    }
    this.$axios.$get(`/articles?path=${encodeURIComponent(path)}`).then(res => {
      if (res != null) {
        this.article = res
      }
    })
  },
  methods: {
    onShow(article) {
      this.article = article
      this.$router.push({path: `/bai-viet${article.path}`});
    },
    onGoBack () {
      this.article = null
      this.$router.push({path: `/`});
    }
  }
}
</script>

<style scoped>

</style>
