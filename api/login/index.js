import axios from '@/config/axios'

// 登录接口
export const getLogin = (params = {}) => axios({
  url: '/login',
  method: 'post',
  params
})

