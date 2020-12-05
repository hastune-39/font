<template>
  <div>
  <el-row :gutter="20" style="margin: 0px">
    <!--个人头像,1.圆形图标：el-circle, 2.调整图标大小80px-->
    <el-col :span="3" style="margin-top: 10px">
      <img src="static/profilePicture/2.jpg"
           class="el-avatar el-avatar--circle" style="height: 80px; width: 80px">
      <el-button v-if="status"
                 type="primary"
                 round class="button"
                 @click="subCancelFollow">已关注
      </el-button>
      <el-button v-else
                 type="primary"
                 round class="button"
                 @click=subAddFollow>关注
      </el-button>
    </el-col>
    <!--      个人介绍-->
    <el-col :span="6" style="margin-top: 10px">
      <div>
        <div class="username">{{painterInfo.userName}}</div>
        <div class="useraddress">{{painterInfo.address}}</div>
        <div class="usertext">{{painterInfo.signature}}</div>
      </div>
    </el-col>
    <!--个人画作-->
    <el-col :span="15">
      <div>
        <template>
          <!-- 怎么调整走马灯不要下面的指示器？-->
          <el-carousel :autoplay="false" type="card" height="200px" style="margin-top: 5px">
            <el-carousel-item v-for="(picture,pictureIndex) in picturesInfo.pictures" :key="pictureIndex"
                              style="background-color: #d3dce6">
              <h3 class="medium">
                <img :src="picture.picture_address" style="width: 322.5px;">
              </h3>
            </el-carousel-item>
          </el-carousel>
        </template>
      </div>
    </el-col>
  </el-row>
  </div>
</template>

<script>
  export default {
    name: "FollowItem",

    props: {
      painterInfo: {
        painter_id: Number,
        userName: "loading...",
        address: "loading...",
        signature: "loading...",
        profile_picture: "break.img",
      },

      picturesInfo: {
        painter_id: Number,
        pictures: [
          {
            picture_id: Number,
            picture_address: String
          }
        ]
      }

    },

    data() {
      return {
        status: true,
      }
    },

    methods: {
      /***
       * 关注/取关,都交给父来做吧!
       */
      subAddFollow(){
        this.status = true;
        let follower_id = this.$store.state.user.userID;
        let painter_id = this.painterInfo.painter_id;
        this.$emit('addFollow',follower_id, painter_id);
      },

      subCancelFollow(){
        this.status = false;
        let follower_id = this.$store.state.user.userID;
        let painter_id = this.painterInfo.painter_id;
        this.$emit('cancelFollow',follower_id, painter_id);
      }
    }
  }
</script>

<style scoped>
  .username {
    font-size: 20px;
    letter-spacing: 4px;
    font-weight: 100;
    position: center;
    color: pink;
    font-weight: bolder;
    text-align: left;
    margin-left: 0px;
  }

  .useraddress {
    font-size: 12px;
    letter-spacing: 3px;
    font-weight: 100;
    text-align: left;
    margin-left: 0px;
    margin-bottom: 5px;
  }

  .usertext {
    font-size: 10px;
    letter-spacing: 3px;
    font-weight: 100;
    text-align: left;
    margin-left: 0px;
  }

  .button {
    margin-top: 5px;
    background-color: pink;
    border: pink;
    padding: 10px 15px;
    font-size: 12px;
    /*.el-button.is-round{*/
    /*  padding: 10px 15px;*/
    /*}*/
  }

  /*图片轮换*/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
