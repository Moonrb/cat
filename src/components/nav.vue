<template>
  <ul>
    <li @click="tiao">大连</li>
    <router-link to="/move/hoting" tag="li" activeClass="movered">正在热映</router-link>
    <router-link to="/move/upcoming" tag="li" activeClass="movered">即将上映</router-link>
    <router-link to="/seek" tag="li">搜索</router-link>
  </ul>
</template>

<script>
export default {
  methods: {
    tiao () {
      window.location.href = 'http://m.maoyan.com/#city-list'
    }
  }
}
</script>
<style lang="scss" scoped>
  ul{
    position:fixed;
    top: 60px;
    height: 50px;
    width: 100%;
    display: flex;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid #ccc;
    background: white;
    z-index: 999;
    li{
      flex: 1;
      height: 100%;
      font-size:16px;
    }
    li:nth-of-type(2),li:nth-of-type(3){
      font-weight:600;
    }
    li:nth-of-type(4){
      color: #e54847;
    }
    .movered{
      color: #e54847;
      border-bottom: 2px solid #e54847;
    }
  }
</style>
