<template>
  <div>
    progress
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
  computed: {
    userInfo() {
      return JSON.parse(get("userInfo"));
    }
  },
  components: {},
  methods: {
    onUnbindClick() {}
  }
};
</script>
<style  scoped >
a {
  position: relative;
  display: inline-block;
  height: 42px;
  line-height: 42px;
  width: 220px;
  color: #ffffff;
  border: 1px solid orange;
  background: orange;
  border-radius: 4px;
  text-align: center;
  margin-top: 20px;
  left: calc(50% - 110px);
}
</style>


