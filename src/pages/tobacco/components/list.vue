<template>
  <div class="list">
    <h3 class="title">{{title}}</h3>
    <div class="content">
      <div class="item"
           v-for="(item,index) in listData"
           :key="item.id"
           v-if="index < currenNum">
        <img src="../icons/icon_func_group.png"
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
      width: calc(33% - 10);
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
      width: calc(33% - 10);
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
