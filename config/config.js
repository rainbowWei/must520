const IS_DEV = process.env.NODE_ENV === 'development' ? true : false

export default {
  apiBaseUrl: IS_DEV ? `http://dongju.tech` : `http://dongju.tech`,
  imgUrlPrefix: IS_DEV ? `/_nuxt/assets/img` : `http://img.mobro.site/must-website`,
}