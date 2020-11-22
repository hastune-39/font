<template>
  <div class="gutter-example">
    <div><el-button type="success" @click="click" >click me!</el-button></div>
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          col-6
          <my-picturelist ref="picturelist"></my-picturelist>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          col-6
          <my-picturelist/>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          col-6
          <my-picturelist></my-picturelist>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          col-6
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import myPicturelist from '../../components/picturelist/Picturelist';

  export default {
    components: {
      myPicturelist,
    },

    methods: {
      click(){//调用子组件方法
        this.$refs.picturelist.selectAll();
      }
    }

  }
</script>

<style scoped>
  .gutter-example >>> .ant-row > div {
    background: transparent;
    border: 0;
  }
  .gutter-box {
    overflow: hidden;
    padding: 8px;
    padding-bottom: 16px;
    background: #00a0e9;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .sumborder {

  }
  .border {

  }
</style>
