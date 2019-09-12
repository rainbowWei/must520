

import axios from '~/config/axios'

// 提交合作加盟的数据
export const submitCooperate = (params = {}) => {
  return axios({
    method: 'post',
    params,
    url: '/toJoinUs'
  })
}