import apiProcessAttr from "../api/apiProcessAttr";
import * as types from './mutation-types'

// export const normalizeFixedTaskData = function ({
//   commit,
//   state
// }) {
//   console.log('ss')
//   state.indexList.fixedTaskList.forEach(item => {
//     apiProcessAttr.getProcessAttrList(item.id).then(attrList => {
//       let tempData = deepClone(Object.assign({}, state.tempData, item));
//       let normalizeFixedTaskData = []
//       for (var prop in tempData) {
//         if (prop in state.tempData === false) {
//           console.log(prop)
//           delete tempData[prop];
//         }
//       }
//       tempData.dataItemEntityList = attrList;
//       normalizeFixedTaskData.push(tempData);
//       commit(types.NORMALIZED_FIXEDTASKDATA, normalizeFixedTaskData)

//     });
//   });
// }