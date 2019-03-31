<template>
  <div class="box">
    <mt-search
      v-model="value"
      cancel-text="取消"
      placeholder="搜索">
    </mt-search>
  </div>
</template>

<script>
import Vue from 'vue'
import { Search } from 'mint-ui'
Vue.component(Search.name, Search)
export default {
  data () {
    return {
      value: '搜电影 、搜影院'
    }
  }
}
</script>

<style scoped lang="scss">
  .box{
    width: 100%;
    position: fixed;
    top: 16vw;
    z-index: 101;
  }
</style>
