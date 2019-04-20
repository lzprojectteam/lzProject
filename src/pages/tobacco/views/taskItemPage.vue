<template>
  <div>
    <van-nav-bar :title="taskItemsTitle + '日报填写'"
                 left-text="返回"
                 left-arrow
                 @click-left="onClickLeft">
    </van-nav-bar>
    taskItem
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskItemsTitle: null
    };
  },
  created() {
    let taskItemId = this.$route.params.taskItemId;
    this.taskItemsTitle = this.$route.params.taskItemsTitle;
  },
  props: [],
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>