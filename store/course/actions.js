import {
  GET_COURSELISTS
} from './types'
import {
  apiCourseLists
} from '@/api/course/course'

// 请求用户信息
const action = {
  getCourseLists({ state, commit, rootState }) {
    apiCourseLists().then(res => {
      commit(GET_COURSELISTS, res.goodsList)
    })
      .catch(err => {
        throw new Error(err)
      })
  }
}

export default action
