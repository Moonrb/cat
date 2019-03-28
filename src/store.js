import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movielist: [],
    mostswip: [],
    cominlist: [],
    mostSwippage: 0
  },
  mutations: {
    // 创建一个书页来控制懒加载轮播图
    mostSwippageMuta (state, data) {
      state.mostSwippage = 0
    },

    movieOnInfoListMuta (state, data) {
      state.movielist = data
    },

    mostExpectedMuta (state, data) {
      state.mostswip = data
    },
    cominListMuta (state, data) {
      state.cominlist = data
    }
  },

  // 请求的热播列表ajax
  actions: {
    // 请求的热播列表ajax
    movieOnInfoList (store) {
      axios.get('/ajax/movieOnInfoList?token=').then(res => {
        store.commit('movieOnInfoListMuta', res.data.movieList)
      })
    },
    // 请求将播放列表
    mostExpected (store) {
      axios.get(`/ajax/mostExpected?ci=65&limit=10&offset=${store.state.mostSwippage}&token=`).then(res => {
        store.commit('mostExpectedMuta', res.data)
        store.state.mostSwippage = store.state.mostSwippage + 10
      })
    },
    cominList (store) {
      axios.get(`/ajax/comingList?ci=65&token=&limit=10`).then(res => {
        store.commit('cominListMuta', res.data)
      })
    }

  }

})
export default store
