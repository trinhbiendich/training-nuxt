<template>
  <div class="container">
    <NuxtLink to="/">Home page</NuxtLink>
    <Logo />
  </div>
</template>

<script>
import Logo from "~/components/Logo";
export default {
  components: {Logo}
}
</script>

<style scoped>
div.container {
  margin: 0 auto;
}
</style>
