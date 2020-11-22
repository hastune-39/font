<template>
  <el-container>
    <el-header>
      <my-head-bar/>
    </el-header>
    <el-container>
      <el-aside>
        <my-side-bar/>
      </el-aside>
      <el-main>
        <my-main/>
      </el-main>
    </el-container>
  </el-container>
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

</style>
