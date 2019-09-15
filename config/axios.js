import Vue from 'vue'
import nativeAxios from 'axios'
import config from './config'

const instance = nativeAxios.create({
  headers: {
    'Content-Type': 'application/json; charset=utf8'
  },
  baseURL: `${config.apiBaseUrl}`
})

instance.interceptors.request.use(function (conf) {
  if (conf.method === 'get') {
    if (!conf.params) {
      conf.params = {}
    }
    conf.params[`_t`] = Date.now()
    Object.keys(conf.params).forEach(key => {
      if (!conf.params[key] && conf.params[key] !== 0) {
        Reflect.deleteProperty(conf.params, key)
      }
    })
  }
  return conf
})

instance.interceptors.response.use(res => {
  if (res.data) {
    return res.data
  } else {
    return res
  }
})

let _instance = {
  install: function (Vue, options) {
    Vue.axios = instance
    Object.defineProperties(Vue.prototype, {
      axios: {
        get () {
          return instance
        }
      },
      $axios: {
        get () {
          return instance
        }
      }
    })
  }
}
// Vue.use(_instance)

export default instance
export const axios = _instance
