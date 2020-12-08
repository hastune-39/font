<template>
  <div class="item">
    <div class="item-content">
      <div style="position: relative; z-index: 1">
      <img :src="picturesMessage.picture.picture_address" class="item-img" @click="mydebug">
      </div>
      <div style="position: relative; z-index: 2">
        <el-dropdown>
        <my-like ref="like" :user_id="picturesMessage.collection.user_id"
                 :picture_id="picturesMessage.picture.picture_id"
                 :is-collected="isCollected" />
        <!-- <el-dropdown-menu slot="dropdown"></el-dropdown-menu> -->
      </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
  import myLike from '../collection/Like';

  export default {
    name: "PictureItem",
    components: {
      myLike,
    },

    props: {//获取pagelist所传递的图片信息参数，以及是否收藏参数
      picturesMessage: {
        width: Number,
        height: Number,
        picture: {
          picture_id: Number,
          painter_id: Number,
          picture_address: null,
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
      return {}
    },

    computed: {//计算样式
      isCollected() {
        return (this.picturesMessage.collection.user_id >= 0) ? true : false;
      }
    },

    methods: {
      //提交收藏需要图片id与用户id
      submitCollect(pictureID, userID) {
        //axios提交
      },

      //取消收藏
      cancelCollect(pictureID, userID) {

      },

      mydebug(){
        console.log("图片收藏信息: user_id为"+ this.picturesMessage.collection.user_id + " picture_id为"+this.picturesMessage.picture.picture_id);
        console.log("计算属性："+ this.isCollected);
      }
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

  .item-img {
    width: 100%;
    height: 100%;
    transition: opacity 0.3s, transform 0.3s ease;
    object-fit: cover;
    border-radius: 16px;
  }
</style>
