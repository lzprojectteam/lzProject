<template>
  <div>
    this is table
  </div>
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {};
  },
  mounted() {},
  beforeRouteLeave(to, from, next) {
    this.$emit("bindActive", to.path);
    next();
  },
  components: {},
  methods: {}
});
</script>
<style  scoped >
@import "../style/css/base.scss";
</style>


