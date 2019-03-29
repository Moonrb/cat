<template>
  <ul>
    <li v-for="data in movielist" :key="data.id">
      <dl>
        <dt>
          <img :src="replaceWH(data.img)">
        </dt>
      </dl>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  methods: {
    skipDetails (id) {
      this.$router.push(`/detail/${id}`)
    },
    replaceWH (img) {
      return img.replace('/w.h/', '//')
    }
  },
  mounted () {
    this.$store.dispatch('movieOnInfoList')
  },
  computed: {
    ...mapState(['movielist'])
  }

}
</script>
<style lang="scss" scoped>
  ul{
    width: 100vw;
    height: 100%;
    position: relative;
    top:17vw;
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
