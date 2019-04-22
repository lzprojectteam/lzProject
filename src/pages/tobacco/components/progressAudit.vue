<template>
  <div class="checkIndex">
    <van-tabs color='gray'
              type="card">
      <van-tab>
        <div slot="title">
          待审核 <i class="num">3</i>
        </div>
        <div class="checkLater">

        </div>
      </van-tab>
      <van-tab>
        <div slot="title">
          审核历史 <i class="num">3</i>
        </div>
        <div class="checkHistory">sdfsf</div>
      </van-tab>
    </van-tabs>
  </div>
</template>


<script>
import apiSsoUser from "../../../pages/login/api/apiSsoUser";
import { get } from "@/utils/cookieUtils";
import Vue from "vue";
export default {
  data() {
    return {};
  },
  beforeRouteLeave(to, from, next) {
    this.$emit("bindActive", to.path);
    next();
  },
  computed: {},
  components: {},
  methods: {
    onUnbindClick() {}
  }
};
</script>
<style  scoped lang="scss" >
.checkIndex {
  margin-top: 10px;
  .checkLater,
  .checkHistory {
    margin-top: 10px;
  }
  .num {
    font-size: 12px;
    color: bisque;
    background-color: rgb(146, 62, 62);
    border-radius: 50%;
    padding: 3px 7px;
  }
}
</style>


