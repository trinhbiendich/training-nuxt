export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    //title: 'training-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://test.opencms.codes/vendor/justifiedGallery.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://test.opencms.codes/vendor/colorbox/colorbox.css"
      },
      {
        rel: "stylesheet",
        href: "https://test.opencms.codes/vendor/fontawesome/v5.14.0/css/pro.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      },
      {
        rel: "stylesheet",
        href: "/assets/style.css"
      }
    ],

    script: [
      {
        src: "https://code.jquery.com/jquery-3.6.0.js",
        type: "text/javascript"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
        type: "text/javascript"
      },
      {
        src: "https://test.opencms.codes/vendor/jquery.justifiedGallery.min.js",
        type: "text/javascript"
      },
      {
        src: "https://test.opencms.codes/vendor/colorbox/jquery.colorbox-min.js",
        type: "text/javascript"
      },
      {
        src: "//kit.fontawesome.com/1de42d7e79.js",
        type: "text/javascript"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
  ],

  static: {
    prefix: false
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  publicRuntimeConfig: {
    axios: {
      baseURL: 'https://api.bolacmuito.xyz',
      //baseURL: 'http://localhost:8765',
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",
    // Doc: https://github.com/nuxt-community/style-resources-module
    "@nuxtjs/style-resources",
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    port: 6969
  },

  ssr: false,
  //target: 'staticx',
  router: {
    //base: '/training-nuxt/',
    extendRoutes(routes, resolve) {
      // routes.push({
      //   path: '/harmonica',
      //   component: resolve(__dirname, 'pages/index')
      // })
      // routes.push({
      //   path: '/*',
      //   component: resolve(__dirname, 'pages/index')
      // })
    }
  },

  styleResources: {
    scss: "./assets/scss/*.scss"
  },

  serverMiddleware: [
    '~/server-middleware/logger'
  ]
}
