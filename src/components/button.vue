<template>
  <van-button type="danger">确认</van-button>
</template>

<script>
import Vue from 'vue'
import { Button } from 'vant'
Vue.use(Button)
export default {
  name: 'button'
}
</script>

<style scoped lang="scss">
  .van-button--normal{
    width: 95%;
    transform: translateX(2%);
  }
</style>
