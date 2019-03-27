<template>
  <ul>
    <li v-for = "data in movelist " :key="data" @click="skipDetails(data)">
      {{data}}
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      movelist: [11, 22, 33, 44]
    }
  },
  methods: {
    skipDetails (id) {
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>
<style lang="scss" scoped>
  h1{
    color: fuchsia;
  }
</style>
