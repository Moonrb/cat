<template>
  <ul>
    <router-link to="/city" tag="li">大连</router-link>
    <router-link to="/move/hoting" tag="li" activeClass="movered">正在热映</router-link>
    <router-link to="/move/upcoming" tag="li" activeClass="movered">即将上映</router-link>
    <router-link to="/seek" tag="li">搜索</router-link>
  </ul>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
  ul{
    position: relative;
    top: 16vw;
    height: 12vw;
    width: 100%;
    display: flex;
    line-height: 12vw;
    text-align: center;
    border-bottom: 1px solid #ccc;
    li{
      flex: 1;
      height: 100%;
      font-size:5vw;
    }
    li:nth-of-type(2),li:nth-of-type(3){
      font-weight:600;
    }
    li:nth-of-type(4){
      color: rgb(229,70,70);
    }
    .movered{
      color: rgb(229,70,70);
      border-bottom: 2px solid rgb(229,70,70);
    }
  }
</style>
