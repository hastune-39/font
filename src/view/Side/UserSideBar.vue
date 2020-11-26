<template>
  <div class="LeftSide Position">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="true">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
        </template>
        <el-menu-item-group>
<!--          <span slot="title">分组一</span>-->
<!--          <el-menu-item index="1-1">选项1</el-menu-item>-->
<!--          <el-menu-item index="1-2">选项2</el-menu-item>-->
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
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

  export default {
    name: "UserSideBar",
    components: {
      myPictureItem,
    },
    data() {
      return {};
    },
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
