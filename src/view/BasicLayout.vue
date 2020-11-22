<template>
  <div class="border">
    <el-container>
      <el-aside width="100 px">
        <my-side-bar/>
      </el-aside>
      <el-container>
        <el-header>
          <my-head-bar/>
        </el-header>
        <el-main>
          <my-main/>
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
  .border {
    margin-top: 0px;
    padding-top: 0px;
  }
</style>
