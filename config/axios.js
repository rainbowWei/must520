import Vue from 'vue'
import nativeAxios from 'axios'

const IS_DEV = process.env.NODE_ENV === 'development' ? true : false

const config  = {
  url: IS_DEV ? `https://www.easy-mock.com/mock/5d121c84a9c50f15f3066896/` : `https://www.easy-mock.com/mock/5d121c84a9c50f15f3066896/`,
}

const instance = nativeAxios.create({
  headers: {
    'Content-Type': 'application/json; charset=utf8'
  },
  baseURL: `${config.url}`
})

instance.interceptors.request.use(function (conf) {
  if (conf.method === 'get') {
    if (!conf.params) {
      conf.params = {}
    }
    conf.params[`_t`] = Date.now()
    
    const search = Object.keys(conf.params).map(key => {
      return `${key}=${conf.params[key]}`
    }).join('&')
  
    conf = Object.assign(conf, {
      url: `${conf.url}?${search}`
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
