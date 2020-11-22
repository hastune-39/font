<template>
  <div id="app">
    <BasicLayout></BasicLayout>
  </div>
</template>

<script>
  import BasicLayout from './view/BasicLayout';

  export default {
    name: 'App',
    components: {
      BasicLayout,
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
