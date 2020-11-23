<template>
  <div class="itemContent">
    <el-image
      :src="itemurl"
      class="image"></el-image>
  </div>
</template>

<script>
  export default {
    name: "PictureItem",

    props: {
      width: Number,
      height: Number,
      itemurl: String,
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
  img {
    width: 100%;
    height: 100%;
    transition: opacity 0.3s, transform 0.3s ease;
    object-fit: cover;
    border-radius: 16px;
  }

  .itemContent{
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
  }
</style>
