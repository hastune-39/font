<template>
  <div>
    <el-card shadow="always">
      <div style="display: flex; flex-direction: row;">
        <div style=" width: 90px">
          <img src="static/profilePicture/2.jpg"
               class="el-avatar el-avatar--circle"
               style="height: 80px; width: 80px"
               @click="skipToPainterPage">
          <el-button v-if="status"
                     type="primary"
                     round class="button"
                     @click="subCancelFollow">已关注
          </el-button>
          <el-button v-else
                     type="primary"
                     round class="button"
                     @click=subAddFollow>关注
          </el-button>
        </div>
        <!--      个人介绍-->
        <div style="margin-left: 20px">
          <div class="username">DM袋喵</div>
          <div class="useraddress">北京</div>
          <div class="usertext">Twitter@matchachWeibo@抹茶專門店AM Glad to see u and always be happy to make friends with u~ thx to all the u friendly to me!!(　′?｀) (ps.If u want chat with me,use en)...</div>
        </div>
      </div>
    </el-card>

    <el-card shadow="always" style="margin-top: 15px">
      <div class="useraddress" style="margin-bottom: 15px">
        其他作品
      </div>
      <div>
        <el-row :gutter="2" style="margin-top: 10px; margin-bottom: 10px">
          <el-col :span="8"><img src="static/img/DM袋喵/4.jpg" class="asideImg"/></el-col>
          <el-col :span="8"><img src="static/img/DM袋喵/2.jpg" class="asideImg"/></el-col>
          <el-col :span="8"><img src="static/img/DM袋喵/6.jpg" class="asideImg"/></el-col>
        </el-row>
        <el-row :gutter="2" style="margin-top: 10px; margin-bottom: 10px">
          <el-col :span="8"><img src="static/img/DM袋喵/1.jpg" class="asideImg"/></el-col>
          <el-col :span="8"><img src="static/img/DM袋喵/3.jpg" class="asideImg"/></el-col>
          <el-col :span="8"><img src="static/img/DM袋喵/5.jpg" class="asideImg"/></el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "aside"
  }
</script>

<style scoped>
  .username {
    font-size: 20px;
    letter-spacing: 4px;
    font-weight: 100;
    position: center;
    color: pink;
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

  .button {
    margin-top: 5px;
    background-color: pink;
    border: pink;
    padding: 10px 15px;
    font-size: 12px;
    /*.el-button.is-round{*/
    /*  padding: 10px 15px;*/
    /*}*/
  }

  .asideImg{
    height: 90px;
    width: 90px;
    border-radius: 8px;
    object-fit: cover;
  }

</style>
