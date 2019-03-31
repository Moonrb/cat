<template>
<footer>
  <ul>
    <router-link to="/move/hoting" tag="li" active-class="act">
    <i class="iconfont icon-dianying"></i>
    <span>电影</span>
    </router-link>

    <li @click="tiao">
    <i class="iconfont icon-yingyuana"></i>
    <span>影院</span>
    </li>

    <router-link to="/myself" tag="li" active-class="act">
    <i class="iconfont icon-wode"></i>
    <span>我的</span>
    </router-link>
  </ul>
</footer>
</template>

<script>

export default {
  methods: {
    tiao () {
      window.location.href = 'http://m.maoyan.com/#cinema'
    }
  }
}
</script>
<style lang="scss" scoped>
footer{
        position: fixed;
        bottom: 0;
        left: 0;
        width:100%;
        height: 60px;
        line-height: 60px;
        background: #fff;
        ul{
            display: flex;
            li{
                flex: 1;
                font-size: 14px;
                text-align: center;
                line-height: 60px;
                span{
                  height: 30px;
                  line-height: 30px;
                }
                i{
                    font-size: 25px;
                    display: block;
                    height: 25px;
                    margin-top: -10px;}
            }
          .act{
            color: #e54847;
          }
        }
    }
</style>
