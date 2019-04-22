<template>
  <div>
    <div class="header-fixed">
      <van-nav-bar :title="taskItemsData && taskItemsData.title"
                   left-text="返回"
                   left-arrow
                   @click-left="onClickLeft">
      </van-nav-bar>
      <van-button type="primary"
                  @click="goToAddPage"
                  size="large">+新增填报</van-button>
      <div class="label">填报历史</div>
    </div>
    <keep-alive>
      <scroll class="taskItems-wrapper">
        <div class="taskItems">
          <task-item v-for="(taskItem, index ) in  taskItemsData && taskItemsData.dataItemEntityList"
                     :key="index"
                     :taskItem="taskItem"
                     :taskItemsTitle="taskItemsData.title"></task-item>
        </div>
      </scroll>
    </keep-alive>

  </div>
</template>
<script>
import Vue from "vue";
import TaskItem from "../components/taskItem.vue";
import Scroll from "../components/scroll.vue";
import { mapMutations } from "Vuex";
export default Vue.extend({
  data() {
    return {
      taskItemsData: {}
    };
  },
  components: {
    "task-item": TaskItem,
    scroll: Scroll
  },
  created() {
    let taskItemsId = this.$route.params.taskItemsId;
    // if (!taskItemsId) {
    //   this.$router.replace("./");
    // }
    this.$store.commit("tobacco/TASKITEMSDATA", taskItemsId);
    this.taskItemsData = this.$store.state.tobacco[
      "taskItemsData" + taskItemsId
    ];
  },
  mounted() {},
  methods: {
    goToAddPage() {},
    onClickLeft() {
      this.$router.go(-1);
    }
  }
});
</script>
<style  scoped lang=scss>
.header-fixed {
  position: fixed;
  width: 100%;
  background-color: white;
  .label {
    padding: 15px;
    font-size: 16px;
    font-weight: 600;
    border-bottom: solid gray 1px;
  }
}
.taskItems-wrapper {
  position: absolute;
  width: 100%;
  top: 143px;
  bottom: 0;
  overflow: hidden;
}

.taskItems {
  position: absolute;
  width: 100%;
}
</style>


