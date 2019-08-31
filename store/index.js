import Vue from 'vue'
import Vuex from 'vuex'
import courseFunc from './course'

Vue.use(Vuex)

const course = courseFunc();
export default () => new Vuex.Store({
  modules: {
    course,
  }
})

