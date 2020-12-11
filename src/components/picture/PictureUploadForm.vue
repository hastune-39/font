<template>
  <el-dialog
    :visible.sync="dialogFormVisible"
    width="30%"
    style="margin-top: 100px">
    <div style="display: flex; flex-direction: row">
      <div style="display: flex; flex-direction: column; width: 150px">
        <my-upload ref="pictureUpload"></my-upload>
        <!--        <span class="title">标题</span>-->
        <el-input v-model="title"
                  placeholder="请输入标题"
                  style="height: 35px; margin-top: 10px">
        </el-input>
      </div>
      <div style="height: 200px; width: 100%; text-align: left; margin-left: 15px; position: relative">
        <span class="title" style="margin-bottom: 5px">关键字</span>
        <div style="border-color: lightgreen; width: 100%; max-height: 150px; display: flex; flex-direction: column">
          <div>
            <my-key-word-tage ref="keyWordsTages"/>
          </div>
        </div>
        <div style="position: absolute; bottom: 1%; right: 0%">
          <el-button @click="uploadForm" size="small" >上传</el-button>
        </div>
      </div>
    </div>

  </el-dialog>
</template>

<script>
  import myUpload from './Upload';
  import myKeyWordTage from './KeyWordTag';

  export default {
    name: "PictureUploadForm",

    components: {
      myUpload,
      myKeyWordTage,
    },

    data() {
      return {
        dialogFormVisible: true,
        title: '',
      }
    },

    methods: {
      open() {
        console.log("picture-upload-form");
        this.dialogFormVisible = true;
      },

      uploadForm(){
        this.dialogFormVisible = false
        //1.上传图片
        this.$refs.pictureUpload.submit(this.title, this.$refs.keyWordsTages.getdata());
      },
    }
  }
</script>

<style scoped>
  .img {
    width: 100%;
    height: 100%;
    transition: opacity 0.3s, transform 0.3s ease;
    object-fit: cover;
    border-radius: 16px;

  }

  .title {
    /*padding-left: 10px;*/
    text-align: left;
    font-size: 15px;
    letter-spacing: 4px;
    font-weight: 100;
    color: pink;
    position: center;
    font-weight: bolder;
  }
</style>
