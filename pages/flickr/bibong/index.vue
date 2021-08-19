<template>
  <div v-html="photos">

  </div>
</template>

<script>
import data1 from './data-page01.json'
import data2 from './data-page02.json'


export default {
  data () {
    return {
      photos: '',
    }
  },
  created() {
    this.photos = data1.photoset.photo.map(item => item.url_o).join('<br/>');
    this.photos += '<br/>' + data2.photoset.photo.map(item => item.url_o).join('<br/>');
  }
}
</script>

<style scoped>

</style>
