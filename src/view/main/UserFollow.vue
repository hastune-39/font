<template>
  <FollowList ref="followlist"></FollowList>
</template>

<script>
  import FollowList from '../../components/follow/FollowList';

  export default {
    name: "UserFollow",

    components: {
      FollowList
    },


    created() {//创建时调用函数
      let _this = this;
      this.$nextTick(() => {
        _this.$refs.followlist.getPaintersID(); //异步?
        _this.$refs.followlist.getAllPaintersInfo();
        _this.$refs.followlist.getPainterInfo();
      })
    }
  }
</script>

<style scoped>

</style>
