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
          :listData="taskData.fixedTaskList"></list>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import List from "../components/list.vue";
import apiProcess from "../api/apiProcess";
import { getUser, setUser } from "@/utils/userUtils";
import { Loading } from "vant";
export default Vue.extend({
  data() {
    return {
      taskData: {
        fixedTaskList: []
      },
      showfixedTask: false
    };
  },
  created() {
    let user = getUser();
    let that = this;
    apiProcess.showIndexList(user.organizationId).then(res => {
      that.taskData.fixedTaskList = res.fixedTaskList;
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


