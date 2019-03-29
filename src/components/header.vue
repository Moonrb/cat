<template>
  <div>
    <h1>{{title}}</h1>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '猫眼电影'
    }
  }
}
</script>
<style lang="scss" scoped>
  div{
    width: 100vw;
    background: rgb(239,66,56);
    position: fixed;
    top: 0px;
    height: 16vw;
    line-height: 16vw;
    h1{
      height: 100%;
      font-size: 5vw;
      text-align: center;
      color: white;
      color: white;
    }
  }
</style>
