<template>

  <div class="flextitle">
    <div>
      <a-input-group Large>
        <a-select default-value="0" style="width: 23%" @change="selectChange">
          <a-select-option value="0"> type1 </a-select-option>
          <a-select-option value="1"> type2 </a-select-option>
          <a-select-option value="2"> type3 </a-select-option>
        </a-select>
        <a-input-search
          style="width: 77%"
          placeholder="input search text"
          allow-clear
          enter-button
          @search="searchModal"
      />
      </a-input-group>
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
