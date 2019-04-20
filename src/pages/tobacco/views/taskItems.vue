<template>
  <div>
    TaskDetail
  </div>
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {};
  },
  beforeRouteEnter(to, from, next) {
    console.log(to.params.taskItemsId);
    next();
  },
  // created() {
  //   console.log(this.$router.history.current.params.id);
  // },
  mounted() {},
  methods: {}
});
</script>
<style  scoped >
@import "../style/css/base.scss";
</style>


