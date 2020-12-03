<template>
  <div class="item">
    <div class="item-content">
      <img :src="itemurl" class="item-img">
      <el-dropdown>
        <i class="el-icon-star-off"></i>
        <!--      <Like/>-->
        <!-- <el-dropdown-menu slot="dropdown"></el-dropdown-menu> -->
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PictureItem",

    props: {//获取pagelist所传递的图片信息参数，以及是否收藏参数
      picturesMessage:{
        width: Number,
        height: Number,
        picture: {
          picture_id: Number,
          painter_id: Number,
          picture_address: String,
          uploadTime: String,
          title: String,
        },
        collection: {
          user_id: -1,
          picture_id: -1,
          CollectTime: String,
        }
      }
    },

    data() {
      return {
        isCollected: Boolean,
      };
    },

    computed: {//计算样式

    },

    methods: {
      //提交收藏需要图片id与用户id
      submitCollect(pictureID, userID){
        //axios提交
      },

      //取消收藏
      cancelCollect(pictureID, userID){

      },
    },
  }

</script>

<style scoped>
  .item {
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 8px;
    padding-bottom: 16px;
    overflow: hidden;
  }
  .item-content {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
  }

  .item-img{
    width: 100%;
    height: 100%;
    transition: opacity 0.3s, transform 0.3s ease;
    object-fit: cover;
    border-radius: 16px;
  }
</style>
