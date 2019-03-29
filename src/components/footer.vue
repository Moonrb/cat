<template>
  <ul>
    <router-link to="/move/hoting" tag="li">电影</router-link>
    <router-link to="/moveth" tag="li">影院</router-link>
    <router-link to="/myself" tag="li">我的</router-link>
  </ul>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
  ul{
    background: white;
    position: fixed;
    bottom: 0;
    display: flex;
    height: 15vw;
    width: 100%;
line-height: 15vw;
    li{
      flex: 1;
      height: 100%;
      text-align: center;
    }
  }
</style>
