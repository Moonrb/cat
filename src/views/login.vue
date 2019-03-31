<template>
  <div>
    <moveheader></moveheader>
    <div class="ipt">
  <van-cell-group>
    <van-field
      v-model="username"
      clearable
      input-align
      size="9"
      right-icon="question-o"
      placeholder="请输入用户名"
      error-message=""
      @click-right-icon="$toast('question')"
    />

    <van-field
      v-model="password"
      type="password"
      input-align
      size="9"
      placeholder="请输入密码"
      error-message = ""
    />
  </van-cell-group>
      <movebutton></movebutton>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Field } from 'vant'
import moveheader from '../components/header'
import movebutton from '../components/button'
Vue.use(Field)
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    moveheader,
    movebutton
  }
}
</script>
<style lang="scss" scoped>
.ipt{
  position: relative;
  top: 75px;
}
</style>
