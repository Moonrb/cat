<template>
  <h1>首页</h1>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {

    }
  },
  mounted () {
    axios.get('/ajax/movieOnInfoList?token=').then(res => {
      console.log(res.data)
    })
  }
}
</script>
<style lang="scss">
</style>
