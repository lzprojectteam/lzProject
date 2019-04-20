<template>
  <div class="classItem">
    <div class="left">
      <span class="time">时间</span>
      <span class="status">状态:
        <span class="statusItem">待审批</span>
      </span>
    </div>
    <div class="right"
         @click="editTaskItem">
      <span class="edit">点击修改 <span class="arrow">></span></span>
    </div>
  </div>
</template>

<script>
import apiProcessData from "../api/apiProcessData";
export default {
  data() {
    return {};
  },
  props: ["taskItem", "taskItemsTitle"],
  created() {},
  methods: {
    editTaskItem() {
      let taskItemId = this.taskItem.id;
      let taskItemsTitle = this.taskItemsTitle;
      this.$router.push({
        name: "taskItemPage",
        params: { taskItemId, taskItemsTitle }
      });
    }
  }
};
</script>

<style lang="scss">
.classItem {
  overflow: auto;
  width: 100%;
  border-bottom: solid gray 1px;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    flex-direction: column;
    padding: 8px 0 8px 20px;
    .time {
      padding-bottom: 4px;
    }
    .status {
      color: gray;
      .statusItem {
        color: red;
      }
    }
  }
  .right {
    display: flex;
    padding-right: 20px;
    flex-direction: column;
    justify-content: center;
    .edit {
      vertical-align: middle;
      color: rgb(30, 179, 179);
      .arrow {
        color: gray;
        vertical-align: 1px;
      }
    }
  }
}
</style>
