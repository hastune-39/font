<template>
  <el-card :body-style="{ padding: '0px' }">
    <div class="rowclass">
      <div><img src="../../../../static/profilePicture/0.jpg" class="image ind"></div>
      <div style="height: max-content"><a-divider type="vertical" /><a-divider type="vertical"  /></div>
      <div style="padding: 14px;">
        <div class="individuleProduce username">初音未来</div>
        <div class="individuleProduce useraddress">日本 東京都</div>
        <div class="bottom clearfix individuleProduce usertext">
          <a-skeleton active/>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
  import store from '../../../store/store';

  export default {
    name: "IndividualCard",
    computed: {
      userName() {
        return store.state.user.userName;
      },
      sex() {
        return store.state.user.sex;
      },
      address() {
        return store.state.user.address;
      },
      profile_picture() {
        return store.state.user.profile_picture;
      },
      signature() {
        return store.state.user.signature;
      }

    }
  }
</script>

<style scoped>
  .rowclass {
    display: flex;
    flex-direction: row;
    flex-flow: row;
  }


  .username {
    font-size: 20px;
    letter-spacing: 4px;
    font-weight: 100;
    position: center;
    color: pink;
    font-weight: bolder;
  }

  .useraddress {
    font-size: 10px;
    letter-spacing: 3px;
    font-weight: 100;
  }

  .usertext {
    font-size: 10px;
    letter-spacing: 3px;
    font-weight: 100;
    text-align: justify;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .individuleProduce{
    width: 200px;
    margin: 5px;
    padding: 5px;
  }

  .image {
    width: 200px;
    max-height: 300px;
    display: block;
    padding: 8px;
  }

</style>
