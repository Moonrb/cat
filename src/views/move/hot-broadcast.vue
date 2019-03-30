<template>
  <ul>
    <li v-for="data in movielist" :key="data.id">
      <img :src="replaceWH(data.img)">
      <div>
         <h3>{{data.nm}}</h3>
         <p v-if="data">观众评<span class="grade">{{data.sc}}</span></p>
         <p>主演:{{data.star}}</p>
         <p class="last">{{data.showInfo}}</p>
         <div class="butt">购票</div>
      </div>
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
*{
    margin:0;
    padding: 0;
  }
  ul{
    margin-bottom: 40px;
    margin-top: 120px;
    li{
      padding:10px;
      overflow: hidden;
      img{
        float: left;
        height: 100px;
        width: 70px;
        padding-right: 10px;

      }
      div{
        width: calc(100% - 100px);
        float: left;
        border-bottom: 1px solid #ccc;
        height: 100%;

          h3{
            width: 100%;
            height: 22px;
            line-height: 20px;
            font-size: 18px;
            font-weight: 600;
            color:#666;
            padding-top: 10px;
          }
          p{
            line-height: 25px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            font-size: 14px;
            color:#666;

            span.grade{
              color: rgb(253, 219, 69);
              padding-left: 5px;
            }
          }
          p.last{
              padding-bottom: 8px;
            }
          div.butt{
              width: 47px;
              height: 27px;
              line-height: 28px;
              text-align: center;
              box-sizing: border-box;
              background-color: #f03d37;
              color: #fff;
              border-radius: 4px;
              white-space: nowrap;
              font-size: 12px;
              cursor: pointer;
              float:right;
              margin-top: -80px;
          }
        }
    }
  }
</style>
