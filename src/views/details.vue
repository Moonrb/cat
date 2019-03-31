<template>
  <h1>详情页</h1>
</template>

<script>
export default {
  mounted () {
    // this.$store.commit('movedetailsId', this.$router.params.myid)
    this.$store.dispatch('movedetails')
  }
}
</script>
<style lang="scss" scoped>
  h1{
    color: fuchsia;
  }
</style>
