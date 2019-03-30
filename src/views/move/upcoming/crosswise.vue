<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in mostswip.coming" :key="item.id">{{item.nm}}</div>
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
  computed: {
    ...mapState(['mostswip'])

  },
  updated () {
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      slidesPerView: 3,
      spaceBetween: 30,
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
  top: 30vw;
  width:100%;
  height: 30vw;
  background: blueviolet;
}
</style>
