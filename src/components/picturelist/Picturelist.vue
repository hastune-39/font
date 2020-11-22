<template>

  <div>

    <div v-for="item in displayItems">
      <my-picture-item :url="item.picture_address"></my-picture-item>
    </div>
  </div>
</template>

<script>
  import myPictureItem from "./PictureItem";
  import axios from 'axios';

  export default {
    components: {
      myPictureItem,
    },
    data() {
      return {
        displayItems: []
      }
    },

    methods: {
      selectAll(){
        console.log('prepareing selectAll axios...')
        axios.get('/pictures/selectAll').then((response)=>{
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

</style>
