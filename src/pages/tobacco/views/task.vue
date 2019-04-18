<template>
  <div>
    task
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

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


