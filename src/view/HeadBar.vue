<template>

  <div class="flextitle">
    <div>
        <mysearch-box/>
    </div>
  </div>
</template>

<script>
  import mysearchBox from './Header/searchBox'

  export default {
    name: 'HeadBar',

    components: {
      mysearchBox,
    },

    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {

    }
  }
</script>

<style>
  .flextitle {
    flex-direction: row;
    display: flex;
    justify-content: center;
  }
</style>
