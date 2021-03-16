<template>
  <div class="container">
    <NuxtLink to="/">{{this.pageInfo.title}}</NuxtLink>
    <button
      scope="public_profile,email"
      @click="checkLoginState()">Login
    </button>
  </div>
</template>

<script>
import Logo from "~/components/Logo";
export default {
  components: {Logo},
  head() {
    return {
      title: this.pageInfo.title === "" ? "Training NuxtJS" : "Training NuxtJS | " + this.pageInfo.title
    }
  },
  mounted() {
    this.fetchPageInfo();
  },
  data() {
    return {
      pageInfo: {
        title: ""
      }
    }
  },
  methods: {
    async fetchPageInfo() {
      let pathMatch = this.$route.params.pathMatch;
      let url = `https://api.opencms.codes/sites/${pathMatch}`;
      let res = await fetch(url);
      let data = await res.json();
      if (data.type === "success") {
        console.log(data);
        this.pageInfo = data.data;
      }
    },
    checkLoginState() {               // Called when a person is finished with the Login Button.
      FB.getLoginStatus(function(response) {   // See the onlogin handler
        console.log('statusChangeCallback');
        console.log(response);                   // The current login status of the person.
        if (response.status === 'connected') {   // Logged into your webpage and Facebook.
          console.log('Welcome!  Fetching your information.... ');
          FB.api('/me', function(response) {
            console.log('Successful login for: ' + response.name);
            alert('Thanks for logging in, ' + response.name + '!')
          });
        } else {                                 // Not logged into your webpage or we are unable to tell.
          alert('Please log into this webpage.')
        }
      });
    },


  }
}
</script>

<style scoped>

</style>
