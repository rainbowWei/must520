import Vue from 'vue'
import Icon from '@/components/common/Icon'
import Button from '@/components/common/Button'

// 全局注册自定义组件
Vue.component(Icon.name, Icon)
Vue.component(Button.name, Button)

// vue-awesome-swiper 
if (process.browser) {
  require('swiper/dist/css/swiper.css')
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}
