import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movieList: []
  },
  mutations: {
    movieOnInfoListMuta (state, data) {
      state.movieList = data
    }
  },

  // 请求的热播列表ajax
  actions: {
    // 请求的热播列表ajax
    movieOnInfoList (state) {
      axios.get('/ajax/movieOnInfoList?token=').then(res => {
        state.commit('movieOnInfoListMuta', res.data.movieList)
      })
    },
    mostExpected (state) {
      axios.get('/ajax/movieOnInfoList?token=').then(res => {
        state.commit('mostExpectedMuta', res.data.movieList)
      })
    }

  }

})
export default store
