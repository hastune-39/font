<template>
  <div>
    <el-button type="success" icon="el-icon-check" circle @click="selectAll"></el-button>
    <el-row :gutter="20" class="flex">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div v-for="item in displayItems" class="itemBorder">
            <my-picture-item :url="item.picture_address"></my-picture-item>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div v-for="item in displayItems" class="itemBorder">
            <my-picture-item :url="item.picture_address"></my-picture-item>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div v-for="item in displayItems" class="itemBorder">
            <my-picture-item :url="item.picture_address"></my-picture-item>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import myPictureItem from "./PictureItem";
  import axios from 'axios';

  export default {
    components: {
      myPictureItem
    },

    data() {
      return {
        displayItems: []
      }
    },

    methods: {
      selectAll() {
        console.log('prepareing selectAll axios...')
        axios.get('/pictures/selectAll').then((response) => {
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
    background: #ffffff;
  }

  .bg-purple {
    background: #ffffff;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 24px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .flex {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .itemBorder{
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 8px;
    padding-bottom: 16px;
    overflow: hidden;
  }

  .item-content {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    transition: opacity 0.3s, transform 0.3s ease;
    object-fit: cover;
    border-radius: 16px;
  }

  .count {
    position: absolute;
    display: inline-block;
    top: 8px;
    right: 8px;
    color: white;
    background-color: #0000009e;
    padding: 2px;
    border-radius: 4px;
  }

  img {
    float: left;
    fill: white;
    height: 20px;
    width: 20px;
  }

  span {
    float: right;
    padding: 0 2px;
    line-height: 20px;
  }
</style>
