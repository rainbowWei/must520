
module.exports = {
  mode: 'universal', // 使用模式 spa: 单页面应用， universal: 多页面
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/main',
    { src: "@/plugins/element-ui", ssr: true },
    { src: '@/plugins/video-player', ssr: false }
  ],
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/reset.css',
    'element-ui/lib/theme-chalk/index.css',
    'video.js/dist/video-js.css'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },
  styleResources: {
    scss: './assets/css/mixin.scss'
  },
  server: {
    "host": "localhost",
    "port": 10086
  },
}
