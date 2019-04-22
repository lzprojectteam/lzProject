import * as types from './mutation-types'


export default {
  [types.INDEXLIST](state, indexList) {
    state.indexList = indexList
  },
  [types.NORMALIZE_FIXEDTASKDATA](state, normalizeFixedTaskData) {
    state.normalizeFixedTaskData = normalizeFixedTaskData
  },

  // 生成对应的TASKITEMSDATA数据
  [types.TASKITEMSDATA](state, taskItemsid) {
    state.normalizeFixedTaskData.forEach(item => {
      if (item.id === taskItemsid) {
        state['taskItemsData' + taskItemsid] = item
      }
    })

  },


  // [types.FIXEDTASKTEMPDATA](state, indexList) {
  //   state.indexList = indexList
  // },

}