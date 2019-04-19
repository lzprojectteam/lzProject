<template>
  <div>
    <van-nav-bar :title="titleName"
                 left-text="返回"
                 left-arrow
                 @click-left="onClickLeft"
                 @click-right="onClickRight">
      <van-icon name="manager-o"
                slot="right" />
    </van-nav-bar>
    <keep-alive>
      <router-view @bindActive="bindActive"></router-view>
    </keep-alive>

    <van-tabbar v-model="active"
                @change="switchItem(active)">
      <van-tabbar-item v-for="item in navTitles"
                       :key="item.id"
                       :icon="item.titleIcon">{{item.titleName}} </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

export default Vue.extend({
  data() {
    return {
      active: 2,
      titleName: "个人中心",
      navTitles: [
        { titleName: "报表", titleIcon: "description", id: 0, path: "/table" },
        { titleName: "任务", titleIcon: "records", id: 1, path: "/task" },
        {
          titleName: "进度审核",
          titleIcon: "sign",
          id: 2,
          path: "/progressAudit"
        }
      ]
    };
  },
  methods: {
    bindActive(path: String) {
      this._changeActive(path);
    },
    onClickRight() {
      this.$router.push({ name: "personInfo" });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    switchItem(active: Number) {
      let path = this.navTitles[active].path;
      this._changeActive(this.navTitles[active].path);
      this.$router.push(path);
    },
    _changeActive(path: String) {
      let navTitles = this.navTitles;
      navTitles.forEach((item, index) => {
        if (item.path == path) {
          this.active = item.id;
          this.titleName = item.titleName;
        }
      });
    }
  },
  mounted() {
    let temArr = window.location.href.split("/");
    let path = "/" + temArr[temArr.length - 1];
    this._changeActive(path);
  },
  components: {}
});
</script>
<style  scoped >
@import "../style/css/base.scss";
</style>

