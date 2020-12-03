<template>
  <div>
    <!--    <el-button type="primary" icon="el-icon-edit" circle @click="changestore"></el-button>-->
    <!--    <el-button type="success" icon="el-icon-check" circle @click="mydebug"></el-button>-->
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

        collectionItems: [
          {
            user_id: Number,
            picture_id: Number,
            collectTime: String,
          }
        ],

        lists: [
          {
            totalHeight: Number,
            picturesMessage: [
              {
                width: Number,
                height: Number,
                picture: {
                  picture_id: Number,
                  painter_id: Number,
                  picture_address: String,
                  uploadTime: String,
                  title: String,
                },
                collection: {
                  user_id: Number,
                  picture_id: Number,
                  CollectTime: String,
                }
              }
            ]
          }
        ],
        pictureWidth: 500,
      }
    },

    computed: {
      userID() {//监听用户id,从而对收藏内容的显示进行变更
        //id变更时,进行主页collection显示的更新
        this.selectAllCollections();
        return this.$store.state.user.userID;
      }
    },

    watch: {
      '$route': 'search',
    },

    // var: timer=setInterval(this.makeSureLoad, 50),
    methods: {

      //开始时的初始化，设置总共有listNum列pagelist
      startInit(listNum) {
        let _this = this;
        for (let i = 0; i < listNum; i++) {
          _this.lists.push(
            {
              totalHeight: 0,
              picturesMessage: {
                width: Number,
                height: Number,
                picture: {
                  picture_id: Number,
                  painter_id: Number,
                  picture_address: String,
                  uploadTime: String,
                  title: String,
                },
                collection: {
                  user_id: Number,
                  picture_id: Number,
                  CollectTime: String,
                }
              }
            }
          );
        }
      },

      //还没有重写
      initialsubList() {//性能问题?
        this.list1.totalHeight = 0;
        this.list2.totalHeight = 0;
        this.list3.totalHeight = 0;
        this.list1.pictureURL = [];
        this.list2.pictureURL = [];
        this.list3.pictureURL = [];
        console.log("查看清空效果");
        console.log("displayItem的图片个数为: " + this.displayItems.length);
        console.log("list1图片个数为：" + this.list1.pictureURL.length);
        console.log("list2图片个数为：" + this.list2.pictureURL.length);
        console.log("list3图片个数为：" + this.list3.pictureURL.length);
        console.log('finish initialize');
      },

      //loading picture function
      imgload(pictureItem, callback) {
        var img = new Image();
        img.src = pictureItem.picture_address;
        // if (img.complete) {
        //   //图片是否存在缓存
        //   callback(img);
        //   return;
        // }
        img.onload = function () {
          callback(img, pictureItem);
        }
      },

      calculateImageHeight(width, height) {
        console.log("宽度是: " + width, "高度是: " + height);
        console.log("相对高度是: " + ((this.pictureWidth) * height / width));
        return ((this.pictureWidth) * height / width);
      },

      allocPicture(img, pictureItem) {
        let _this = this;
        console.log('图片信息为: src——' + img.src + ", height——" + img.height + ';');
        //输出调试信息
        for (let i = 0; i < _this.lists.length; i++) {
          console.log('待插入的列表的信息为,list' + i + ": " + this.list1.totalHeight);
        }

        //1.计算那一列是最短的
        let insertColumn = 0;
        let minHeight = _this.lists[0].totalHeight; //不能没有列
        for (let i = 0; i < _this.lists.length; i++) {
          if (_this.lists[i].totalHeight < minHeight) {
            insertColumn = i;
            minHeight = _this.lists[i].totalHeight;
          }
        }

        //2.将图片信息插入最短的一列，并更新列总高度
        _this.lists[insertColumn].totalHeight += _this.calculateImageHeight(img, width, img.height);
        _this.lists[insertColumn].picturesMessage.push({//使用push使得template可以监听到最想数组的变化
          width: img.width,//宽度高度都无用，因为有变换
          height: img.height,
          picture: pictureItem,
          collection: {//添加收藏信息至list  由于未登录，所以所有都无收藏
            user_id: -1,
            picture_id: -1,
            CollectTime: null,
          }
        })
        console.log("put picture in list" + insertColumn);

        // let isCollected = false;
        // for(let i=0; i<_this.collectionItems; i++){
        //   if(_this.collectionItems[i].picture_id == pictureItem.picture_id){
        //     //
        //   }
        // }
      },


      // //mydebug
      // mydebug() {
      //   console.log("displayItem里的内容是: ");
      //   console.log("list1长度为: " + this.list1.pictureURL.length + " list1的内容是: " + this.list1.pictureURL);
      //   console.log("list2长度为: " + this.list2.pictureURL.length + " list2的内容是: " + this.list2.pictureURL);
      //   console.log("list3长度为: " + this.list3.pictureURL.length + " list3的内容是: " + this.list3.pictureURL);
      // },

      //axios function
      search() {
        let _this = this;
        console.log("router发生变化并监听到了");
        console.log("监听的类型是: " + _this.$route.params.type);
        if (_this.$route.params.type == 'keyword') {
          let keyword = _this.$route.params.keyword;
          _this.selectByKeyword(keyword);
        } else {

        }
      },

      /***
       * 处理全图片搜集部分
       */
      selectAll() {
        console.log('prepareing selectAll axios...')

        let _this = this;
        //1.axios获得所有图片
        axios.get('/pictures/selectAll').then((response) => {
          _this.displayItems = response.data;
          console.log("所有的图片信息为：" + _this.displayItems);
          // //2.axios获得收藏信息
          // axios.get('').then(function (response) {
          //   _this.collectionItems = response.data;
          //   console.log("所有图片的收藏信息为：" + _this.collectionItems);
          //   //3.列表初始化
          //   _this.initialsubList();
          //   //4.对图片进行分配
          //   for (let i = 0; i < _this.displayItems.length; i++) {
          //     _this.imgload(_this.displayItems[i], _this.allocPicture);
          //   }
          //   console.log('finish load list');
          // }).catch(function (error) {
          //   console.log(error);
          // })
          //2.列表初始化
          _this.initialsubList();
          //3.分配图片
          for (let i = 0; i < _this.displayItems.length; i++) {
            _this.imgload(_this.displayItems[i], _this.allocPicture);
          }
        }).catch(function (error) {
          console.log(error);
        });
      },

      selectByKeyword(keyword) {
        console.log("开始准备selectByKeyword的axios,其中keyword是: " + keyword);
        axios.get('/pictures/searchKeyword', {
          params: {
            keyword: keyword
          }
        }).then((response) => {
          console.log("完成了selectByKeyword的axios,其中keyword为: " + keyword);
          this.displayItems = response.data;
          console.log(this.displayItems);
          this.initialsubList();
          //load all pictures
          for (let i = 0; i < this.displayItems.length; i++) {
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
      },

      /***
       * 处理图片收藏部分
       */
      selectAllCollections() {
        let _this = this;
        let nowUserID = _this.$store.state.user.userID;
        //1.axios请求获得所有当前用户收藏信息
        axios.get('', {
          params: {

          }
        }).then(function (response) {
            console.log("获取收藏信息成功...");
            _this.collectionItems = response.data;

            //2.加载用户收藏信息,即对用户收藏信息进行分配
            for(let i = 0;i<_this.collectionItems.length; i++){
              _this.allocCollectionMessage(_this.collectionItems[i]);
            }
        }).catch(function (error) {
          console.log(error);
        })
      },

      allocCollectionMessage(collectionItem){
        let _this = this;
        //1.从所有的list中寻找与当前collectionItem图片id相同的一项
        for(let i = 0;i<_this.lists.length;i++){
          for(let j=0;j<_this.lists[i].picturesMessage.length; i++){//双循环，笨死了，但是无哈希
            if(_this.lists[i].picturesMessage[j].picture.painter_id == collectionItem.picture_id){
              //2.找到收藏项所在pagelist中的位置后，将collectoin信息进行替换
              let newPictureMessage = _this.lists[i].picturesMessage[j];
              newPictureMessage.collection = collectionItem;
              _this.lists[i].picturesMessage.splice(j,1,newPictureMessage);
            }
          }
        }
      }
    },


    created() {
      this.startInit(3);
      this.selectAll();
      console.log('finish selectAll');
    }
  }
</script>

<style scoped>
  :last-child {
    margin-bottom: 0;
  }

  .bg-purple {
    background: #ffffff;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 24px;
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

</style>
