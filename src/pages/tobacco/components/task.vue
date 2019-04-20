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
          :listData="normalizeFixedTaskData"></list>
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
      tempData: {
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
      },
      normalizeFixedTaskData: []
    };
  },
  created() {
    let user = getUser();
    let that = this;
    apiProcess.showIndexList(user.organizationId).then(indexList => {
      console.log(indexList);

      this.$store.commit("INDEXLIST", indexList);
      that.taskData.fixedTaskList = indexList.fixedTaskList;
      this.showfixedTask = true;
      indexList.fixedTaskList.forEach(item => {
        apiProcessAttr.getProcessAttrList(item.id).then(attrList => {
          let tempData = deepClone(Object.assign({}, this.tempData, item));
          for (var prop in tempData) {
            if (prop in this.tempData === false) {
              delete tempData[prop];
            }
          }
          tempData.dataItemEntityList = attrList;
          this.normalizeFixedTaskData.push(tempData);
        });
      });
      console.log(this.normalizeFixedTaskData);

      this.$store.commit(
        "NORMALIZE_FIXEDTASKDATA",
        this.normalizeFixedTaskData
      );
    });
  },
  beforeRouteLeave(to, from, next) {
    this.$emit("bindActive", to.path);
    next();
  },
  components: {
    list: List
  },
  methods: {}
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


