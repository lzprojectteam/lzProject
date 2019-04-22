<template>
  <div>
    <div v-if="!showfixedTask"
         class="loading">
      <van-loading type="spinner"
                   color="gray"
                   size="60px" />
    </div>

    <list v-if="showfixedTask"
          title="固化任务"
          num=5
          icon="../icons/icon_func_group.png"
          :listData="taskData.fixedTaskList"></list>
  </div>
</template>


<script >
import Vue from "vue";
import List from "../components/list.vue";
import apiProcess from "../api/apiProcess";
import { getUser, setUser } from "@/utils/userUtils";
import apiProcessAttr from "../api/apiProcessAttr";
import deepClone from "../utils/deepClone";
import { Loading } from "vant";
export default Vue.extend({
  data() {
    return {
      taskData: {
        fixedTaskList: []
      },
      showfixedTask: false,
      tempDataFixedTask: {
        altitude: 0,
        amount: 0,
        area: 0,
        author: "string",
        content: "string",
        control: 0,
        countryId: "string",
        countryName: "string",
        createBy: "string",
        createdDate: "2019-04-19T11:31:49.169Z",
        dataItemEntityList: null,
        date: "2019-04-19T11:31:49.170Z",
        deleteBy: "string",
        deleteDate: "2019-04-19T11:31:49.170Z",
        desc: "string",
        designSchemeCode: "string",
        designSchemeId: 0,
        districtCode: "string",
        districtId: "string",
        districtIds: ["string"],
        districtName: "string",
        districtOrder: 0,
        farmerId: "string",
        farmerName: "string",
        farmerNumber: "string",
        flag: "string",
        geography: 0,
        gpsupdate: "2019-04-19T11:31:49.170Z",
        id: "string",
        latitude: 0,
        longitude: 0,
        organizationCode: "string",
        organizationId: "string",
        organizationIds: ["string"],
        organizationName: "string",
        organizationOrder: 0,
        path: "string",
        pictures: "string",
        processCode: "string",
        processId: 0,
        rate: 0,
        receive: "2019-04-19T11:31:49.170Z",
        relatedId: "string",
        relatedName: "string",
        relatedNumber: "string",
        score: 0,
        send: 0,
        serial: "string",
        time: "2019-04-19T11:31:49.170Z",
        times: 0,
        title: "string",
        updateBy: "string",
        updatedDate: "2019-04-19T11:31:49.170Z",
        version: 0,
        year: 0
      }, // fixedTaskList标准格式
      tempDataAttr: {
        attrId: 0,
        createBy: "string",
        createdDate: "2019-04-19T11:31:49.170Z",
        dataType: "string",
        deleteBy: "string",
        deleteDate: "2019-04-19T11:31:49.170Z",
        desc: "string",
        display: "string",
        flag: "string",
        id: "string",
        label: "string",
        point: 0,
        processDataId: "string",
        processId: 0,
        receive: "2019-04-19T11:31:49.170Z",
        send: 0,
        times: 0,
        updateBy: "string",
        updatedDate: "2019-04-19T11:31:49.170Z",
        valueBool: true,
        valueDate: "2019-04-19T11:31:49.170Z",
        valueDouble: 0,
        valueInt: 0,
        valueLong: 0,
        valueText: "string",
        version: 0
      }, // dataItemEntityList标准格式
      normalizeFixedTaskData: [] //用于提交的数据格式
    };
  },
  created() {
    let user = getUser();
    let that = this;
    apiProcess.showIndexList(user.organizationId).then(indexList => {
      that.taskData.fixedTaskList = indexList.fixedTaskList;
      this._normalizeFixedTaskData(indexList.fixedTaskList);
      this.$store.commit("tobacco/INDEXLIST", indexList);
      console.log(indexList);
      this.showfixedTask = true;
    });
  },
  beforeRouteLeave(to, from, next) {
    this.$emit("bindActive", to.path);
    next();
  },
  components: {
    list: List
  },
  methods: {
    //格式化固化任务数据并存储到vuex中
    _normalizeFixedTaskData(fixedTaskList) {
      fixedTaskList.forEach(item => {
        apiProcessAttr.getProcessAttrList(item.id).then(attrList => {
          let dealedAttrList = attrList.map(attrItem => {
            return this._mergeObj(this.tempDataAttr, attrItem);
          });
          let tempData = this._mergeObj(this.tempDataFixedTask, item);
          tempData.dataItemEntityList = dealedAttrList;
          this.normalizeFixedTaskData.push(tempData);
        });
      });
      console.log(this.normalizeFixedTaskData);

      this.$store.commit(
        "tobacco/NORMALIZE_FIXEDTASKDATA",
        this.normalizeFixedTaskData
      );
    },
    // 将obj2的属性值赋值给obj1中,并将obj1中有obj2中的属性删除
    _mergeObj(obj1, obj2) {
      let tempObj = deepClone(Object.assign({}, obj1, obj2));
      for (var prop in tempObj) {
        if (prop in obj1 === false) {
          delete tempObj[prop];
        }
      }
      return tempObj;
    }
  }
});
</script>
<style  scoped >
@import "../style/css/base.scss";
.loading {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 200px;
}
</style>


