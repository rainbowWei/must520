import axios from '~/config/axios'

// 获取课程列表
export const apiCourseLists = (params = {}) => {
  return axios({
    method: 'get',
    params,
    url: '/api/courseLists'
  })
}

//获取课程分类的数据

export const getCourseClassify = (params = {}) =>{
  return axios({
    url:'/course/getcoursecate',
    method: 'get',
    params
  })
}

//获取课程列表
export const getCourseLists = (params = {}) =>{
  return axios({
    url: '/course/getcourse',
    method: 'get',
    params

  })
}

