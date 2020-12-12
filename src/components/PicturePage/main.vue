<template>
  <div>
    <el-card shadow="always">
      <img src="../../../static/img/DM袋喵/5.jpg" style="max-width: 100%; position: center; border-radius: 8px;">
      <!--    <div style="margin-top: 10px; text-align: right">-->
      <!--      <a-icon type="heart" style="font-size: 30px"/>-->
      <!--    </div>-->
      <div style="margin-top: 30px; padding-left: 5px; text-align: left">
        <div class="username">
          咒术回战
        </div>
        <div style="margin-top: 12px">
          <el-tag v-for="(content,index) in tagContent" :key="index" :type="tagType[index%5]" style="margin-right: 5px">{{content}}</el-tag>
<!--          <span>这里可根据关键词索引</span>-->
        </div>
        <div class="usertext" style="margin-top: 10px">
          2020年5月24日下午5点49分
        </div>
      </div>
    </el-card>

    <my-comment/>
  </div>
</template>

<script>

  import myComment from '../comment/comment';

  export default {
    name: "main",

    components: {
      myComment,
    },

    data() {
      return {
        tagType: ['', 'success', 'info', 'warning', 'danger'],
        tagContent: ["咒术回战", "五条悟", "无量空处", "DM袋喵"]
      }
    }


  }
</script>

<style scoped>
  .username {
    font-size: 20px;
    letter-spacing: 4px;
    font-weight: 100;
    position: center;
    font-weight: bolder;
    text-align: left;
    margin-left: 0px;
  }

  .useraddress {
    font-size: 12px;
    letter-spacing: 3px;
    font-weight: 100;
    text-align: left;
    margin-left: 0px;
    margin-bottom: 5px;
  }

  .usertext {
    font-size: 10px;
    letter-spacing: 3px;
    font-weight: 100;
    text-align: left;
    margin-left: 0px;
  }
</style>
