<template>

</template>

<script>
  export default {
    name: "FollowItem",
    data() {
      return {
        status: true,

        painterInfo: [
          {
            painter_id: Number,
            userName: "loading...",
            address: "loading...",
            signature: "loading...",
            profile_picture: "break.img",
          }
        ],

        picturesInfo: [
          {
            painter_id: Number,
            pictures: [
              {
                picture_id: Number,
                picture_address: String
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
