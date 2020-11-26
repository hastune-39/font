<template>
  <div class="border">
    <el-container class="page-container">
      <el-aside  style="background-color: rgb(238, 241, 246)" width="65px">
        <my-side-bar/>
      </el-aside>
      <el-container>
        <el-header>
          <my-head-bar/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
  import myHeadBar from './HeadBar';
  import mySideBar from './SideBar';
  import myMain from './Main';

  export default {
    name: "BasicLayout",
    components: {
      myHeadBar,
      mySideBar,
      myMain,
    },
  }
</script>

<style scoped>

  .page-container {
  /deep/ .el-main {
    padding: 0px;
  }
  }
</style>
