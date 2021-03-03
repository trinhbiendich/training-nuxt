<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/">OpenCms</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item-dropdown text="Harmonica">
          <b-dropdown-item :to="correctPath('harmonica', 'tremolo24')">Tremolo 24</b-dropdown-item>
          <b-dropdown-item :to="correctPath('harmonica', 'diatonic10')">Diatonic 10</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>


      <b-navbar-nav v-if="false" v-for="item in links" v-bind:key="item.path">
        <b-nav-item v-if="!hasChild(item)" :to="correctPath(item.path)">{{item.text}}</b-nav-item>
        <b-nav-item-dropdown v-else :text="item.text">
          <b-dropdown-item v-for="child in item.children" v-bind:key="child.path" :to="correctPath(item.path, child.path)">{{ child.text }}</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
  beforeCreate() {
  },
  mounted() {
    this.fetchMenus();
  },
  created() {

  },
  data() {
    return {
      links: []
    }
  },
  methods: {
    async fetchMenus() {
      let res = await fetch('https://api.opencms.codes/menu');
      let data = await res.json();
      if (data.type === "success") {
        this.links = data.data;
      }
      console.log(this.links);
    },
    hasChild: function(item) {
      return item.children !== undefined && item.children.length > 0;
    },
    correctPath: function (...paths) {
      return "/" + paths.join('/');
    }
  }
}
</script>

<style scoped>

</style>
