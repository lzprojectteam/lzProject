<template>
  <div class="loginPage">
    <h1 class="loginTitle">中国烟草</h1>
    <div class="login">
      <div class="loginUser">
        <label class="user">账号：</label>
        <input type="text"
               v-model="username" />
      </div>

      <div class="loginPassord">
        <label class="pwd">密码：</label>
        <input type="password"
               v-model="password" />
      </div>

      <button class="submit"
              @click="onLoginClick">登录和绑定</button>
    </div>
  </div>
</template>


<script lang="ts">
import { setUser, getUser, setFiled } from "@/utils/userUtils";
import Vue from "vue";
import { set, getToken, setToken } from "@/utils/cookieUtils";
import { default as apiUser } from "@/api/base/apiUser";
import app from "@/store/modules/core/app";
import { getModule } from "vuex-module-decorators";
import util from "../../../utils/util";
import apiSsoUser from "../api/apiSsoUser";
import store from "@/store/index";

export default Vue.extend({
  name: "login",

  data() {
    return {
      username: "",
      password: "",
      remember: false,
      qrcodeUrl:
        window.location.origin + "/upload/app/" + process.env.VUE_APP_APK_NAME
    };
  },
  mounted() {
    let user = getUser();
    this.remember = user.remember;
    this.username = user.username;
  },
  components: {},
  methods: {
    onLoginClick() {
      let that = this;
      this.username = "casuser";
      this.password = "1";
      if (
        util.isNullOrEmpty(this.username) ||
        util.isNullOrEmpty(this.password)
      ) {
        that.$notify({
          title: "提示",
          message: "用户名或者密码不能为空",
          type: "warning"
        });
        return;
      }
      apiUser
        .loginByUserName(this.username, this.password)
        .then((response: any) => {
          let user = getUser();
          setToken(response.token);
          apiUser.getUserDetail("8003").then(userInfo => {
            setUser(userInfo);
            let userInfos = getUser();
            apiSsoUser
              .binding(userInfo.id, "00000")
              .then(res => {
                console.log(res);
                if (res !== null) {
                  window.location.href = "/";
                } else {
                  alert("ssss");
                }
              })
              .catch(err => {
                window.location.href = "/";
              });
          });
        })
        .catch(error => {
          if (error.response.data.code === "400") {
            that.$notify({
              title: "提示",
              message: "用户名或者密码错误",
              type: "warning"
            });
          } else {
            that.$notify({
              title: "提示",
              message: "登陆异常",
              type: "warning"
            });
            console.log(error);
          }
        });
    }
  }
});
</script>
<style  scoped >
.loginPage {
  padding: 20vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.loginTitle {
  font-weight: 1200;
  font-size: 34px;
  margin-bottom: 15px;
}
input {
  border: solid rgb(179, 176, 176) 1px;
  border-radius: 2px;
  box-shadow: 0 0 1px;
}
.login {
  position: relative;
  font-size: 14px;
}
.loginPassord,
.loginUser {
  margin: 15px 0;
}
.submit {
  background-color: rgb(25, 25, 236);
  color: white;
  border-radius: 4px;
  position: absolute;
  width: 100%;
  left: 50%;
  margin-left: -50%;
  text-align: center;
  padding: 4px 0;
  margin-top: 20px;
}
</style>