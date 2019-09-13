import axios from '@/config/axios'

//人才库列表
export const getTeacherList = (params = {}) => axios({
  url: '/teacher/getteacher',
  method: 'get',
  params
})

//获取地区
export const getAreaList = (params = {}) => axios({
  url: '/getarea',
  method: 'get',
  params
})

//获取级别

export const getGradeList = (params = {}) => axios({
  url: '/getgrade',
  method: 'get',
  params
})

//向后台提交数据
export const submitMessage = (params = {}) => axios({
  url: '/messageBoard',
  method: 'post',
  params
})