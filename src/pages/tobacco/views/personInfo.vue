<template>
  <div class="personInfo">
    <van-nav-bar title="个人中心"
                 left-text="返回"
                 left-arrow
                 @click-left="onClickLeft" />
    <div class="userInfo">
      <p class="user userName">
        姓名：{{userInfo.username}}
      </p>
      <p class="user phoneNum">
        电话：{{userInfo.phone}}
      </p>
      <p class="user organizationName">
        组织单位：{{userInfo.organizationName}}
      </p>
    </div>
    <div class="unbind"
         @click="onUnbindClick">
      解除绑定
    </div>
  </div>

</template>


<script>
import apiSsoUser from "../../../pages/login/api/apiSsoUser";
import { set, getToken, setToken, removeToken } from "@/utils/cookieUtils";
import { getUser, setUser } from "@/utils/userUtils";
import Vue from "vue";
export default {
  data() {
    return {};
  },
  beforeRouteLeave(to, from, next) {
    this.$emit("bindActive", to.path);
    next();
  },
  computed: {
    userInfo() {
      return getUser("user");
    }
  },
  components: {},
  methods: {
    onUnbindClick() {
      apiSsoUser.unBind(this.userInfo.id).then(res => {
        setUser(); //清空存储的user信息
        removeToken(); //清除缓存的token信息
        window.location.href = "/login.html";
        // this.$router.replace({ path: "/login" });
      });
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style  scoped >
.userInfo {
  margin: 30px 40px 10px 40px;
}
.user {
  margin-top: 15px;
  font-weight: 600;
  font-size: 14px;
}
.unbind {
  position: relative;
  display: inline-block;
  height: 30px;
  line-height: 30px;
  width: 220px;
  color: #ffffff;
  background: red;
  border-radius: 4px;
  text-align: center;
  margin-top: 20px;
  left: calc(50% - 110px);
}
</style>


