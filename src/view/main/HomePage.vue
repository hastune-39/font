<template>
  <my-page-list ref="HomePageList"></my-page-list>
</template>

<script>
  import myPageList from '../../components/picturelist/PictureList';

  export default {
    name: "HomePage",

    components: {
      myPageList,
    },

    // watch: {
    //   '$route': {
    //     handler(route){
    //       if(route.name == 'userCollection'){
    //         console.log("handler route: name-userCollection");
    //         this.getCollections();
    //       }
    //     }
    //   }
    // },

    created() {
      this.$nextTick(()=>{
        this.$refs.HomePageList.startInit(3);
        this.$refs.HomePageList.selectAllPictures();
        console.log("主页创建成功...");
      })
    }
  }
</script>

<style scoped>

</style>
