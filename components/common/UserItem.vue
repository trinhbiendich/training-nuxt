<template>
  <div class="row">
    <div class="col-9">
      <nuxt-link target="_blank" :to="{ path: '/flickr/detail', query: { userId: user.user_id }}">{{ user.user_id }}</nuxt-link>
      <b-badge variant="info">{{user.totalImgs}}</b-badge>
      <span>Name: {{ user.realname }}</span>
    </div>
    <div class="col-3">
      <b-badge variant="info"><span class="material-icons md-n">{{ status }}</span></b-badge>
      <a href="javascript:;" @click="removeThisUser" ><span class="material-icons md-n">delete</span></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserItem",
  props: {
    user: {
      type: [Object, Array],
    },
    status: {
      type: String,
      default () {
        return 'wait'
      }
    }
  },
  mounted() {
    console.log(this.user)
  },
  methods: {
    removeThisUser () {
      this.$emit('handleOnDeleteUser', this.user)
    }
  }
}
</script>

<style scoped>
.material-icons.md-n { font-size: 1em; }
.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }
</style>
