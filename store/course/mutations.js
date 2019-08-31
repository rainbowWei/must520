import {
  GET_COURSELISTS
} from './types'

const mutations = {
  [GET_COURSELISTS](state, params) {
    state.courseLists = params
  }
}
export default mutations