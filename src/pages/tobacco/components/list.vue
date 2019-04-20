<template>
  <div class="list">
    <h3 class="title">{{title}}</h3>
    <div class="content">
      <div class="item"
           v-for="(item,index) in listData"
           :key="item.id"
           v-if="index < currenNum"
           @click="showTaskItems(item.id)">
        <img src="../icons/icon_project_note.png"
             alt="">
        <p class="discription">{{item.title}}</p>
      </div>
      <div class="more"
           v-if="currenNum < listData.length">
        <p @click="getMore">更多</p>
      </div>
      <div class="less"
           v-if="currenNum == listData.length">
        <p @click="getLess">收起</p>
      </div>
    </div>

  </div>
</template>

<script>
import apiProcessData from "../api/apiProcessData";
export default {
  data() {
    return {
      tempNum: 0,
      currenNum: 0
    };
  },
  props: ["title", "listData", "num"],
  created() {
    this.tempNum = this.num;
    this.currenNum = this.num;
  },
  methods: {
    showTaskItems(taskItemsId) {
      this.$router.push({ name: "taskItems", params: { taskItemsId } });
    },
    getMore() {
      this.currenNum = this.listData.length;
    },
    getLess() {
      this.currenNum = this.tempNum;
    }
  }
};
</script>

<style lang="scss">
.list {
  padding: 20px 10px;
  border-bottom: solid gray 1px;
  .title {
    font-weight: 500;
    margin-left: 10px;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    padding-top: 10px;
    .item {
      margin: 10px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 60%;
      }
      .discription {
        text-align: center;
      }
    }
    .more,
    .less {
      padding: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      p {
        width: 100%;
      }
    }
  }
}
</style>
