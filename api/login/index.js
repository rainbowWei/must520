import axios from '@/config/axios'

// 登录接口
export const getLogin = (params = {}) => axios({
  url: '/login',
  method: 'post',
  params
})

// 退出登录
export const loginOut = (params = {}) => axios({
  url: '/loginout',
  method: 'get',
  params
})


