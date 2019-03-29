<template>
  <div>
    <moveheader></moveheader>
    <movenav></movenav>
    <router-view></router-view>
    <movefooter></movefooter>
  </div>
</template>

<script>
import moveheader from '../components/header'
import movefooter from '../components/footer'
import movenav from '../components/nav'
export default {
  mounted () {
    // // 测试store的ajax文件请求结果
    // this.$store.dispatch('movieOnInfoList')
    // this.$store.dispatch('mostExpected')
  },
  components: {
    moveheader,
    movefooter,
    movenav
  }
}
</script>
<style lang="scss" scoped>
 h1{
   color: red;
 }
</style>
