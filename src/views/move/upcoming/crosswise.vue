<template>
  <div class="swiper-container">
   <h4>近期最受期待</h4>
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in mostswip.coming" :key="item.id">
        <img :src="replaceWH(item.img)"/>
        <p class="dre">{{item.wish}}想看</p>
        <p>{{item.nm}}</p>
        <p class="week">{{item.comingTitle}}</p>
      </div>
    </div>
  </div>
</template>
<script>
// import 'swiper/dist/css/swiper.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Swiper from 'swiper'
import { mapState } from 'vuex'
export default {
  mounted () {
    this.$store.dispatch('mostExpected')
  },
  methods: {
    replaceWH (img) {
      return img.replace('/w.h/', '//')
    }
  },
  computed: {
    ...mapState(['mostswip'])

  },
  updated () {
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      // loop: true, // 循环模式选项
      slidesPerView: 4,
      spaceBetween: 10,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }
}
</script>

<style scoped lang="scss">
  .swiper-container{
  position: relative;
  top: 110px;
  width:100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  padding-bottom: 10px;
  border-bottom: 10px solid #e1e1e1;
    h4{
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding-left: 10px;
      font-size: 14px;
      color: #333;
    }
   img{
    width: 85px;
    height: 115px;
    position: relative;
    margin-bottom: 6px;
    padding-left: 10px
  }
  p{
    margin: 0 0 3px;
    font-size: 13px;
    color: #222;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-left: 10px
  }
  .dre{
    position: absolute;
    left: 4px;
    bottom: 45px;
    color: #faaf00;
    font-size: 11px;
    font-weight: 600;
    padding-left: 10px
  }
  .week{
    margin: 0;
    font-size: 12px;
    color: #999;
    padding-left: 10px
  }
}

</style>
