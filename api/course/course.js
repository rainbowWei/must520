import axios from '~/config/axios'

// 获取课程列表
export const apiCourseLists = (params = {}) => {
  return axios({
    method: 'get',
    params,
    url: '/api/courseLists'
  })
}
