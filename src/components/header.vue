<template>
  <div>
    <h3>{{title}}</h3>
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
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background:#e54847;
    position: fixed;
    top: 0;
    z-index: 999;
      h3{
        color: #fff;
        font-size: 20px;
        font-weight: 100;
      }
  }
</style>
