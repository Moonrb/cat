<template>
  <ul
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10">
    <li v-for="item in cominlist" :key="item.id">
      {{ item.id }}
    </li>
  </ul>
</template>

<script>
import { InfiniteScroll } from 'mint-ui'
import Vue from 'vue'
import { mapState } from 'vuex'
Vue.use(InfiniteScroll)
export default {
  methods: {
    loadMore () {
      this.loading = true
      this.$store.dispatch('cominList')
    },
    skipDetails (id) {
      this.$router.push(`/detail/${id}`)
    },
    replaceWH (img) {
      return img.replace('/w.h/', '//')
    }
  },
  mounted () {
    this.$store.dispatch('cominList')
  },
  computed: {
    ...mapState(['cominlist'])
  }

}
</script>

<style lang="scss" scoped>
  ul{
    width: 100vw;
    height: 100%;
    position: relative;
    top:30vw;
    overflow: hidden;
    li{
      height: 40vw;
      dl{
        width: 100%;
        height: 100%;
        display: flex;
        dt{
          flex: 30%;
          background: blueviolet;
          img{
            height: 35vw;
          }

        }
        dd{
          flex: 70%;
          background: red;
        }
      }

      img{
        height: 35vw;
      }

    }
  }
</style>
