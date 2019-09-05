import axios from '@/config/axios'

// 人才库列表
export const getTeacherList = (params = {}) => axios({
  url: '/teacher/getteacher',
  method: 'get',
  params
})