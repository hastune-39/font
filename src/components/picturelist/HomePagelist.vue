<template>
  <div>
    <el-button type="primary" icon="el-icon-edit" circle @click="changestore"></el-button>
    <el-button type="success" icon="el-icon-check" circle @click="mydebug"></el-button>
    <el-row :gutter="20" class="flex">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div v-for="url in list1.pictureURL" class="itemBorder">
            <my-picture-item :itemurl="url"></my-picture-item>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div v-for="url in list2.pictureURL" class="itemBorder">
            <my-picture-item :itemurl="url"></my-picture-item>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div v-for="url in list3.pictureURL" class="itemBorder">
            <my-picture-item :itemurl="url"></my-picture-item>
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
        displayItems: [
          {
            picture_id: Number,
            painter_id: Number,
            picture_address: String,
            uploadTime: String,
            title: String,
          }
        ],
        list1: {
          totalHeight: Number,
          pictureURL: [],
        },
        list2: {
          totalHeight: Number,
          pictureURL: [],
        },
        list3: {
          totalHeight: Number,
          pictureURL: [],
        },
        pictureWidth: 5,
      }
    },

    computed: {
      storeKeyWord() {
        console.log("搜索框keyword发生改变,准备重新搜索...");
        console.log("搜索内容是: "+ this.$store.getters.storeKeyWord);
        this.selectByKeyword(this.$store.getters.storeKeyWord);
      }
    },


    // var: timer=setInterval(this.makeSureLoad, 50),
    methods: {
      //loading picture function
      imgload(url, callback) {
        var img = new Image();
        img.src = url;
        // if (img.complete) {
        //   //图片是否存在缓存
        //   callback(img);
        //   return;
        // }
        img.onload = function () {
          callback(img);
        }
      },
      // makeSureLoad(){
      //   console.log('try to pull pictures...')
      //   let allload = true;
      //   for(let i=0; i<this.displayItems.length; i++){
      //     let img = new Image();
      //     img.src = this.displayItems[i].picture_address;
      //     if (img.height <= 0){
      //       allload = false;
      //     }
      //   }
      //   return allload;
      // },
      initialsubList() {//性能问题?
        this.list1.totalHeight = 0;
        this.list2.totalHeight = 0;
        this.list3.totalHeight = 0;
        // this.list1.pictureURL.clear();
        // this.list2.pictureURL.clear();
        // this.list3.pictureURL.clear();
        console.log('finish initialize');
      },

      allocPicture(img) {
        console.log('图片信息为: src——'+img.src+", height——"+img.height+';');
        console.log('待插入的列表的信息为:list1: '+this.list1.totalHeight+' list2: '+this.list2.totalHeight+ ' list3: '+this.list3.totalHeight);
        if (this.list1.totalHeight <= this.list2.totalHeight &&
          this.list1.totalHeight <= this.list3.totalHeight) {
          this.list1.totalHeight += img.height;
          this.list1.pictureURL = this.list1.pictureURL.concat(img.src);
          console.log('put in list1');
        } else if (this.list2.totalHeight <= this.list3.totalHeight) {
          this.list2.totalHeight += img.height;
          this.list2.pictureURL = this.list2.pictureURL.concat(img.src);
          console.log('put in list2');
        } else {
          this.list3.totalHeight += img.height;
          this.list3.pictureURL = this.list3.pictureURL.concat(img.src);
          console.log('put in list3');
        }
      },


      //mydebug
      mydebug() {
        console.log("搜索内容是: "+ this.$store.state.keyword);
      },
      changestore(){
        console.log("尝试去改变store...");
        this.$store.commit('searchKeyword', 'params');
      },

      //axios function
      selectAll() {//性能大损失
        console.log('prepareing selectAll axios...')
        axios.get('/pictures/selectAll').then((response) => {
          console.log('before selectAll axios...')
          this.displayItems = response.data;
          console.log(this.displayItems);
          this.initialsubList();
          //load all pictures
          for(let i=0; i<this.displayItems.length;i++){
            this.imgload(this.displayItems[i].picture_address, this.allocPicture);
          }
          console.log('finish load list?');
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
      },

      selectByKeyword(keyword){
        axios.get('/pictures/searchKeyword', {
          params: {
            keyword: keyword
          }
        }).then((response) => {
          console.log("完成了selectByKeyword的axios,其中keyword为: "+ this.keyword);
          this.displayItems = response.data;
          console.log(this.displayItems);
          this.initialsubList();
          //load all pictures
          for(let i=0; i<this.displayItems.length;i++){
            this.imgload(this.displayItems[i].picture_address, this.allocPicture);
          }
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
    },

    created() {
      this.selectAll();
      console.log('finish selectAll');
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

  .itemBorder {
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
