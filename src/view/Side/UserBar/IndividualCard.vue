<template>
  <el-card :body-style="{ padding: '0px' }">
    <div class="rowclass">
      <div><img src="../../../../static/profilePicture/0.jpg" class="image ind"></div>
      <div style="height: max-content"><a-divider type="vertical" /><a-divider type="vertical"  /></div>
      <div style="padding: 14px;">
        <div style="display: flex; flex-direction: row;">
          <div class="individuleProduce username">{{userName}}</div>
          <i class="el-icon-edit" style="color: pink" @click="updateUserName"></i>
        </div>
        <div class="individuleProduce useraddress">{{address}}</div>
        <div class="bottom clearfix individuleProduce usertext">
          <a-skeleton active/>
        </div>
      </div>
    </div>
    <my-user-message ref="updateMessage"/>
  </el-card>
</template>

<script>
  import store from '../../../store/store';
  import myUserMessage from '../../../components/User/UpdateMessage';

  export default {
    name: "IndividualCard",
    components: {
      myUserMessage,
    },

    data() {
      return{
        inputUserName: "miku",
        inputUserAddress: "",
        inputUserSignature: "",
        inputUserProfilePicture: ""
      }
    },

    computed: {
      userID(){
        return this.$store.state.user.userID;
      },
      userName() {
        return this.$store.state.user.userName;
      },
      sex() {
        return this.$store.state.user.sex;
      },
      address() {
        return this.$store.state.user.address;
      },
      profile_picture() {
        return this.$store.state.user.profile_picture;
      },
      signature() {
        return this.$store.state.user.signature;
      }

    },
    methods: {
      debug(){
        console.log(this.userID, this.userName, this.address);
      },

      updateUserName(){
        this.$refs.updateMessage.updateUserName(this.inputUserName);
      },

      updateUserAddress(){
        this.$refs.updateMessage.updateUserName(this.inputUserAddress);
      },

      updateUserSignature(){
        this.$refs.updateMessage.updateUserName(this.inputUserSignature);
      },

      updateUserProfilePicture(){
        this.$refs.updateMessage.updateUserName(this.inputUserProfilePicture);
      },
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
