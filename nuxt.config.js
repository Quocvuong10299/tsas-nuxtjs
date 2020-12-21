import colors from 'vuetify/es5/util/colors'

export default {
  router:{
    extendsRoutes(router, resolve){
      return[
        {
          name:'index',
          path: '/',
          component: resolve(__dirname, 'pages/index.vue'),
        },
        {
          name:'gioi-thieu',
          path: '/',
          component: resolve(__dirname, 'pages/gioi-thieu.vue'),
        },
        {
          name:'dich-vu',
          path: '/',
          component: resolve(__dirname, 'pages/dich-vu.vue'),
        },
        {
          name:'tin-tuc',
          path: '/',
          component: resolve(__dirname, 'pages/tin-tuc.vue'),
        },
        {
          name:'doi-tac',
          path: '/',
          component: resolve(__dirname, 'pages/doi-tac.vue'),
        },
        {
          name:'lien-he',
          path: '/',
          component: resolve(__dirname, 'pages/lien-he.vue'),
        },
        
      ]
    }
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - nuxtdemo',
    title: 'nuxtdemo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/style.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',,
    //https://www.npmjs.com/package/@nuxtjs/svg
    '@nuxtjs/svg'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#A01E21',
          secondary: '#222736',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
