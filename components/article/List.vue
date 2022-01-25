<template>
  <div>
    <input @change="fetchData()"
           placeholder="Gõ từ khoá hoặc mã chứng khoán để tìm kiếm, ví dụ VCB, VIX....."
           v-on:keyup.enter="fetchData()"
           v-model="search" class="form-control">
    <div v-show="onSearching" class="loading"><i class="fa fa-spinner fa-spin" aria-hidden="true"></i></div>
    <div class="news-item mt-3 mb-3 ml-4" v-for="article in articles" :key="article.id">
      <span class="mr-3">[{{article.strDateTime}}]</span>
      <a href="javascript:;" @click="$emit('showDetail', article)">{{article.title}}</a>
      <hr/>
    </div>

    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="javascript:;"
                               v-if="page > 1"
                               @click="fetchByPage(page - 1)">Previous</a></li>
      <li class="page-item"><a class="page-link" href="javascript:;"
                               @click="fetchByPage(1)"
                               v-if="page > 4">1</a></li>
      <li class="page-item"><a class="page-link" href="javascript:;"
                               v-if="page > 4">...</a></li>

      <li class="page-item" :class="{active: page == p}" v-for="p in pages()" :key="p">
        <a class="page-link" href="javascript:;" @click="fetchByPage(p)">{{p}}</a>
      </li>

      <li class="page-item"><a class="page-link" href="javascript:;"
                               v-if="page < totalPage - 4">...</a></li>
      <li class="page-item"><a class="page-link" href="javascript:;"
                               @click="fetchByPage(totalPage)"
                               v-if="page < totalPage - 4">{{totalPage}}</a></li>

      <li class="page-item"><a class="page-link" href="javascript:;"
                               v-if="page < totalPage"
                               @click="fetchByPage(page + 1)" >Next</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      page: 1,
      search: '',
      onSearching: false,
      limit: 15,
      totalPage: 1,
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    showInfo (article) {
      this.showModal = true
    },
    range(start, end) {
      return Array(end - start + 1).fill().map((_, idx) => start + idx)
    },
    pages () {
      if (this.totalPage <= 5) {
        return this.range(1, this.totalPage)
      }
      if (this.page <= 3) {
        return this.range(1, 5)
      }
      if (this.page >= this.totalPage - 3) {
        return this.range(this.totalPage - 5, this.totalPage)
      }
      return this.range(this.page - 2, this.page + 2)
    },
    fetchByPage (page) {
      if (this.onSearching) {
        return;
      }
      this.page = page
      this.fetchData()
    },
    fetchData () {
      if (this.onSearching) {
        return;
      }
      this.onSearching = true
      this.$axios.$get(`http://stock.bolacmuito.xyz/articles?page=${this.page}&q=${this.search}&limit=${this.limit}`).then(res => {
        this.articles = res.data
        this.totalPage = res.totalPage
        this.onSearching = false
      });
    }
  }
}
</script>

<style scoped>
.loading {
  text-align: center;
  font-size: 60px;
  position: fixed;
  left: 52%;
}
</style>
