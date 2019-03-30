<template>
<div>
  <ul
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10">
      <li v-for="(item,index) in cominlist" :key="index">
      <img :src="replaceWH(item.img)" >
      <div>
      <h3>{{item.nm}}</h3>
      <p><span class="drm">{{item.wish}}</span>人想看</p>
      <p>主演:{{item.star}}</p>
      <p class="last">{{item.rt}}上映</p>
      <div class="butt">购票</div>
      </div>
    </li>
  </ul>
</div>
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
            font-size: 17px;
            color: #333;
            font-weight: 700;
            padding-right: 5px;
            flex-shrink: 1;
          }
          p{
            width: 200px;
            font-size: 13px;
            color: #666;
            margin-top: 6px;
            line-height: 17px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            .drm{
              color: #faaf00;
            }
          }
          p.last{
              padding-bottom: 18px;
            }
          div.butt{
              width: 47px;
              height: 27px;
              line-height: 28px;
              text-align: center;
              box-sizing: border-box;
              background-color:#3c9fe6;
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
