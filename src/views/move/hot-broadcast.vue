<template>
  <ul>
    <!--<li v-for = "data in  " :key="data" @click="skipDetails(data)">-->
      <!--{{data}}-->
    <!--</li>-->
  </ul>
</template>

<script>

export default {
  methods: {
    skipDetails (id) {
      this.$router.push(`/detail/${id}`)
    }
  }
  //  computed: {
  //
  // }

}
</script>
<style lang="scss" scoped>
  h1{
    color: fuchsia;
  }
</style>
