<template>
  <div>
    <el-image
      style="width: 100px; height: 100px"
      :src="url"
      fit="contain"></el-image>
  </div>
</template>

<script>
  export default {
    name: "PictureItem",

    props: {
      width: Number,
      height: Number,
      url: String,
    },

    data() {
      // return {
      //   width: null,
      //   height: null,
      //   url: null,
      // };
    },

    computed: {//计算样式

    },

    methods: {

    },
  }

</script>

<style scoped>

</style>
