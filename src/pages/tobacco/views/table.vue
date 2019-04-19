<template>
  <div>
    <!-- <list></list> -->
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import List from "../components/list.vue";
export default Vue.extend({
  data() {
    return {};
  },
  mounted() {},
  beforeRouteLeave(to, from, next) {
    this.$emit("bindActive", to.path);
    next();
  },
  components: {
    list: List
  },
  methods: {}
});
</script>
<style  scoped >
@import "../style/css/base.scss";
</style>


