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
  actions: {
    movieOnInfoList (state) {
      axios.get('/ajax/movieOnInfoList?token=').then(res => {
        state.commit('movieOnInfoListMuta', res.data.movieList)
      })
    }

  }
})
export default store
