<template>
  <el-card shadow="always" style="margin-top: 10px">
    <div style="height: 150px; display: flex; flex-direction: row; ">
      <div style="height: 100px; width: 100px; display: flex">
        <img src="static/img/DM袋喵/6.jpg"
             class="el-avatar el-avatar--circle imgstyle"

        >
      </div>
      <div style="display: flex; flex-direction: column; width: 100%">
        <div style="display: flex; flex-direction: row; width: 100%">
          <div style="height: 100px; width: 100%; margin-left: 5px;  display: flex">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="来发条友善的评论吧~"
              v-model="inputContent"
              style="color: #f4f5f7; align-self: center">
            </el-input>
          </div>
          <div style="width: 100px; height: 100px;margin-left: 10px;display: flex ">
            <el-button type="primary" style="position: center;align-self: center">发表</el-button>
          </div>
        </div>
        <el-divider/>
      </div>
    </div>

    <div style="height: 180px; width: 100%; display: flex; flex-direction: row">
      <div >
        <img src="static/img/DM袋喵/4.jpg"
             class="el-avatar el-avatar--circle imgstyle">
      </div>
      <div style="margin-left: 32px;text-align: left">
        <div class="username">用户名</div>
        <div style="margin-top: 8px">《原神》关于钟离相关问题的说明
          亲爱的旅行者们，你们好。
          最近，我们陆续收到旅行者对钟离相关问题的反馈。最早从线下测试开始，开发组就持续高度关注着钟离角色的表现，我们对大家的反馈进行了分析和整理，并进行了多轮内部讨论。</div>
        <div style="display: flex; flex-direction: row; margin-top: 10px">
        <div style="" class="useraddress">1小时前</div>
          <a-icon type="like" style="margin-left: 20px; "/>
        </div>
        <el-divider/>
      </div>
    </div>

    <div style="height: 180px; width: 100%; display: flex; flex-direction: row">
      <div >
        <img src="static/img/DM袋喵/e36e2141ebd240981b9ca172912f788ff2287f93.jpg"
             class="el-avatar el-avatar--circle imgstyle">
      </div>
      <div style="margin-left: 32px;text-align: left">
        <div class="username">用户名</div>
        <div style="margin-top: 8px">《原神》关于钟离相关问题的说明
          亲爱的旅行者们，你们好。
          最近，我们陆续收到旅行者对钟离相关问题的反馈。最早从线下测试开始，开发组就持续高度关注着钟离角色的表现，我们对大家的反馈进行了分析和整理，并进行了多轮内部讨论。</div>
        <div style="display: flex; flex-direction: row; margin-top: 10px">
          <div style="" class="useraddress">1小时前</div>
          <a-icon type="like" style="margin-left: 20px; "/>
        </div>
        <el-divider/>
      </div>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: "comment",
    data() {
      return {
        inputContent: "",
      }
    }

  }
</script>

<style scoped>
  .imgstyle{
    height: 60px;
    width: 60px;
    position: center;
    align-self: center;
  }

  .username {
    font-size: 15px;
    letter-spacing: 2px;
    font-weight: 100;
    position: center;
    color: #ffa2c4;
    font-weight: bolder;
    text-align: left;
    margin-left: 0px;
  }

  .useraddress {
    font-size: 12px;
    letter-spacing: 1px;
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
