export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'training-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",
    // Doc: https://github.com/nuxt-community/style-resources-module
    "@nuxtjs/style-resources"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    port: 6969
  },

  //ssr: false,
  //target: 'staticx',
  router: {
  //   base: '/training-nuxt/'
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/articles/*',
        component: resolve(__dirname, 'pages/AdminManager'),
        modal: resolve(__dirname, 'components/modal.vue')
      })
    }
  },

  styleResources: {
    scss: "./assets/scss/*.scss"
  },

  serverMiddleware: [
    '~/server-middleware/logger'
  ]
}
