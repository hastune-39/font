<template>
  <div class="artist-list">

    <div>
      <el-card v-for="(follow,index) in followList" :key="index"
        shadow="hover"
        style="margin-top: 0px; margin-bottom: 20px; padding: 5px">
        <el-row :gutter="20" style="margin: 0px">
          <!--个人头像,1.圆形图标：el-circle, 2.调整图标大小80px-->
          <el-col :span="3" style="margin-top: 10px">
            <img src="static/profilePicture/2.jpg"
                 class="el-avatar el-avatar--circle" style="height: 80px; width: 80px">
            <el-button v-if=""
              type="primary"
              round class="button">已关注</el-button>
          </el-col>
          <!--      个人介绍-->
          <el-col :span="6" style="margin-top: 10px">
            <div>
              <div class="username">{{painterInfo[index].userName}}</div>
              <div class="useraddress">{{painterInfo[index].address}}</div>
              <div class="usertext">{{painterInfo[index].signature}}}</div>
            </div>
          </el-col>
          <!--个人画作-->
          <el-col :span="15">
            <div>
              <template>
                <!-- 怎么调整走马灯不要下面的指示器？-->
                <el-carousel :autoplay="false" type="card" height="200px" style="margin-top: 5px">
                  <el-carousel-item v-for="(picture,pictureIndex) in picturesInfo[index].pictures" :key="pictureIndex"
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
      </el-card>
    </div>


    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "FollowList",

    data() {
      return {
        followList: [
          {
            painter_id: Number,
            followTime: String,
          }
        ],


        painterInfo: [
          {
            painter_id: Number,
            userName: "loading...",
            address: "loading...",
            signature: "loading...",
            profile_picture: "break.img",
          }
        ],

        picturesInfo: [
          {
            painter_id: Number,
            pictures: [
              {
                picture_id: Number,
                picture_address: String
              }
            ]
          }

        ],
      }


      // testIamges: [
      //   'static/img/Rolua/1.jpg',
      //   'static/img/Rolua/2.jpg',
      //   'static/img/Rolua/3.jpg',
      //   'static/img/Rolua/4.jpg',
      //   'static/img/Rolua/5.jpg',
      //   'static/img/Rolua/6.jpg'
      // ],
    },

    methods: {
      /***
       * 获取
       */
      //获取当前用户关注的画师id列表
      getPaintersID() {
        let _this = this;
        let user_id = _this.$store.state.user.userID;
        console.log("准备获取用户关注画师id...");
        //1.axios
        axios.get('/User/Follow', {
          params: {
            user_id: user_id,
          }
        }).then(function (response) {
          _this.followList = response.data;
          console.log("获取关注画师id成功！");
        }).catch(function (error) {
          console.log(error);
        })
      }
      ,

      //获取所有关注画师的信息
      getAllPaintersInfo() {
        let _this = this;
        let user_id = _this.$store.state.user.userID;
        console.log("正在获取画师信息...");
        //1.获取画师信息
        axios.get('/User/Follow/getPainters', {
          params: {
            user_id: user_id,
          }
        }).then(function (response) {
          console.log("获取画师信息成功!");
          _this.painterInfo = response.data;
        }).catch(function (error) {
          console.log(error);
        })
      }
      ,

      //根据画师id拉取画师信息
      getPainterInfo() {
        let _this = this;
        let user_id = _this.$store.state.user.userID;
        console.log("正在获取画师信息...");
        //1.获取画师信息
        axios.get('/User/Follow/getPictures', {
          params: {
            user_id: user_id,
          }
        }).then(function (response) {
          console.log("获取画师信息成功!");
          _this.picturesInfo = response.data;
        }).catch(function (error) {
          console.log(error);
        })
      }
      ,

      /***
       * 关注/取关
       */
      addFollow(){

      },

      cancelFollow(){

      }
    }
  }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;

  &
  :last-child {
    margin-bottom: 0;
  }

  }
  .bg-purple {
    background: #d3dce6;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 33px;
  }

  /*new*/

  .artist-list {
    max-height: calc(100vh - 60px);
    width: 1044px;
    padding: 0px;
    align-self: center;
    align-content: center;
    /*设置居中样式，除了外部留白应该怎么做？*/
    margin-left: auto;
    margin-right: auto;
  }

  /*个人头像*/
  .profile-picture {
  }

  .artist-item {
    width: 1044px;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    list-style: none;
    padding: 24px 0px;
    border-bottom: 1px solid rgb(235, 235, 235);
  }

  /*.name {*/
  /*  font-size: 16px;*/
  /*  font-weight: 700;*/
  /*  color: #333;*/
  /*  text-decoration: none;*/
  /*}*/
  /*.address {*/
  /*  margin-top: 5px;*/
  /*  word-break: break-all;*/
  /*  font-size: 14px;*/
  /*  line-height: 20px;*/
  /*  color: #333;*/
  /*  overflow: hidden;*/
  /*  text-overflow: ellipsis;*/
  /*  display: -webkit-box;*/
  /*  -webkit-line-clamp: 4;*/
  /*  -webkit-box-orient: vertical;*/
  /*}*/
  /*.followed-button {*/
  /*  margin-top: 14px;*/
  /*}*/

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
