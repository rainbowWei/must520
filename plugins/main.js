import Vue from 'vue'
import Icon from '@/components/common/Icon'
import Button from '@/components/common/Button'
import * as utils from '@/config/utils'

// 全局注册自定义组件
Vue.component(Icon.name, Icon)
Vue.component(Button.name, Button)
Vue.filter('formatDate', utils.formatDate)

// vue-awesome-swiper 
if (process.browser) {
  require('swiper/dist/css/swiper.css')
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}
// 工具函数
Vue.prototype.$utils = utils

// 由于图文分离，需要开发环境和生产环境从不同地方取图片，所以进行的拼接图片路径
Vue.prototype.$imgUrl = (path) => {
  const IS_DEV = process.env.NODE_ENV === 'development'
  return IS_DEV ? require(`../assets/img${path}`) : `http://img.mobro.site/must-website${path}`
}