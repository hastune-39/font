<template>
  <div class="gutter-example">
    <div><el-button type="success" @click="selectAll" >click me!</el-button></div>
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          col-6
          <div v-for="item in displayItems">
            <my-picture-item :url="item.picture_address"></my-picture-item>
          </div>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          col-6
          <div v-for="item in displayItems">
            <my-picture-item :url="item.picture_address"></my-picture-item>
          </div>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          col-6
          <div v-for="item in displayItems">
            <my-picture-item :url="item.picture_address"></my-picture-item>
          </div>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          col-6
          <div v-for="item in displayItems">
            <my-picture-item :url="item.picture_address"></my-picture-item>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import myPictureItem from "./PictureItem";
  import axios from 'axios';

  export default {
    components: {
      myPictureItem
    },

    data(){
      return {
        displayItems: []
      }
    },

    methods: {
      selectAll(){
        console.log('prepareing selectAll axios...')
        axios.get('/pictures/selectAll').then((response)=>{
          console.log('before selectAll axios...')
          this.displayItems = response.data;
          console.log(this.displayItems);
        }).catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
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
