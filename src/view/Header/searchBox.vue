<template>
  <div>
    <a-input-search
      placeholder="input search text"
      enter-button="Search"
      size="large"
      @search="onSearch"
      color="pink"
    />
  </div>
</template>

<script>
  export default {
    methods: {
      onSearch(value) {
        console.log("搜索栏内容是: "+ value);
        //路由跳转
        this.$router.push({
          path: '/Home/searchByKeywords',
          name: 'searchKeywords',
          params: {
            type: 'keyword',
            keyword: value,
          }
        })
      },
    },
  };
</script>
