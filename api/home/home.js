import axios from '@/config/axios'

// 人才库列表
export const getTeacherList = (params = {}) => axios({
  url: '/teacher/getteacher',
  method: 'get',
  params
})


//右侧浮窗投诉建议的表单提交

export const submitSuggest = (params = {}) => axios({
  url: '/sendsuggest',
  method: 'post',
  params
})