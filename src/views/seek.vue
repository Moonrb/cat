<template>
  <div>
    <h1 @click="backor">{{back}}</h1>
    <movie-header></movie-header>
    <movie-seek></movie-seek>
  </div>
</template>

<script>
import movieSeek from '../components/seek/movieSeek'
import movieHeader from '../components/header'
export default {
  data () {
    return {
      back: '<'
    }
  },
  components: {
    movieSeek,
    movieHeader
  },
  methods: {
    backor () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
  h1{
    width: 10vw;
    height: 10vw;
    font-size: 7vw;
    line-height: 10vw;
    text-align: center;
    color: white;
    z-index: 103;
    position: fixed;
    top: 3vw;
    left:3vw;
  }
</style>
