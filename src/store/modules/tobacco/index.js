import mutations from './mutations';
import actions from './actions';
import state from './state'

const tobacco = {
  namespaced: true,
  state,
  mutations,
  actions,
}

export default tobacco