<template>
  <el-row :gutter="20" style="margin-left: 10%; margin-right: 10%">
    <el-col :span="16">
      <div class="grid-content">
        <my-main/>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-conten">
        <my-aside/>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import myMain from './main';
  import myAside from './aside';

  export default {
    name: "page",
    components: {
      myMain,
      myAside
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
  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
