<template>
  <div style="display: flex; flex-direction: column; font-size: 20px; padding: 3px">
    <div>
      <el-button icon="el-icon-search" size="small" circle class="icon"
                 style="width: 32px; height: 32px;float: right"></el-button>
    </div>
    <el-button @click="openModify"
               type="primary" icon="el-icon-edit"
               size="small" circle class="icon"></el-button>
    <div>
      <el-popconfirm
      confirm-button-text='确定'
      cancel-button-text='取消'
      icon="el-icon-info"
      icon-color="red"
      title="确定删除这张图片吗？"
      @confirm="close"
      >
      <el-button
                 type="danger" icon="el-icon-delete" size="small" circle class="icon"
                 slot="reference"></el-button>
      </el-popconfirm>
    </div>

    <my-modify ref="modify" :picture="picture"/>
  </div>
</template>

<script>
  import myModify from './utils/Modify';
  import axios from 'axios';

  export default {
    name: "PictureUtils",

    props: {
      picture: {
        picture_id: Number,
        painter_id: Number,
        picture_address: null,
        uploadTime: String,
        title: String,
      },
    },


    components: {
      myModify,
    },

    methods: {
      openModify() {
        this.$refs.modify.open();
      },

      //回调删除
      close() {
        //1.画师删除图片
        let _this = this;
        let picture_id = this.picture.picture_id;
        let painter_id = this.$store.state.user.userID;

        axios.post('/picture/delete', {
          painter_id: painter_id,
          picture_id: picture_id,
        }).then(function (response) {
          console.log(response.data);
          _this.$parent.close();
        }).catch(function (err) {
          console.log(err);
        })
      },
    }
  }
</script>

<style scoped>
  .icon {
    margin-bottom: 3px;
    opacity: 0.2;
  }
</style>
