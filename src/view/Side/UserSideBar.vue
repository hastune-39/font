<template>
  <div class="LeftSide Position">
    <el-menu  class="el-menu-vertical-demo" :collapse="true" >
      <el-menu-item>
        <i class="el-icon-s-home" @click="skipToHome"></i>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
        </template>
        <el-menu-item-group>
          <my-individual-card/>
<!--          <span slot="title">分组一</span>-->
<!--          <el-menu-item index="1-1">选项1</el-menu-item>-->
<!--          <el-menu-item index="1-2">选项2</el-menu-item>-->
        </el-menu-item-group>
<!--        <el-submenu index="1-4">-->
<!--          <span slot="title">选项4</span>-->
<!--          <el-menu-item index="1-4-1">选项1</el-menu-item>-->
<!--        </el-submenu>-->
      </el-submenu>
      <el-menu-item index="2">
        <el-tooltip class="item" effect="dark" content="我的收藏" placement="right"></el-tooltip>
        <i class="el-icon-star-off" @click="skipToUserCollection"></i>
        </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
      </el-menu-item>
    </el-menu>
    <!--    </a-layout-sider>-->
  </div>
</template>

<script>
  import myPictureItem from '../../components/picturelist/PictureItem';
  import myIndividualCard from './UserBar/IndividualCard';

  export default {
    name: "UserSideBar",
    components: {
      myPictureItem,
      myIndividualCard,
    },

    computed(){

    },


    data() {
      return {};
    },

    methods: {
      skipToHome(){
        console.log("正在跳转至主页...");
        let random = Math.floor(Math.random()*10000);
        console.log("random为："+ random);
        this.$router.push({
          path: '/Main/all',
          name: 'HomePage',
          params: {
            random: random,//随机路由，刷新作用
          }
        })
      },
      skipToUserCollection(){
        console.log("正在跳转至用户收藏页...");
        let random = Math.floor(Math.random()*10000);
        console.log("random为："+ random);
        this.$router.push({
          path: '/Main/User/Collection',
          name: 'userCollection',
          params: {
            random: random,//随机路由，刷新作用
          }
        })
      },
    }
  }
</script>

<style scoped>
  .border {
    margin-right: auto;
    border: 5px solid deepskyblue;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100px;
    min-height: 400px;
  }

  .LeftSide {
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
  }

  .Position{
    /*position: absolute;*/
    /*top: 20px;*/
  }
</style>
