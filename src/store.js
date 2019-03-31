import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 电影热播列表数据
    movielist: [],
    // 电影即将播放数据
    mostswip: [],
    cominlist: [],
    // 详情页数据
    detailslist: [],
    mostSwippage: 0,
    // 详情页id值
    movedetailsId: 0
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
      state.cominlist = state.cominlist.concat(data)
    },
    // 详情页传来的ID值通过muta传入state中
    movedetailsId (state, data) {
      state.movedetailsId = data
    },
    // 请求来的的详情页的数据通过mutetions传入state中
    detailsMuta (state, data) {
      state.detailslist = data
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
        store.commit('cominListMuta', res.data.coming)
      })
    },
    // 根据详情页传来的的ID值请求相应的数据

    movedetails (store) {
      axios.post({
        url: `/ajax/movie?forceUpdate=1554025904541`,
        headers: {
          'Connection': 'keep-alive',
          'Content-Encoding': 'gzip',
          'Content-Type': 'application/json; charset=utf-8',
          'Date': 'Sun, 31 Mar 2019 09:51:46 GMT',
          'ETag': 'W/"1fe8-apjxH08+FuxylpuAC0gtuQ"',
          'Server': 'openresty',
          'Transfer-Encoding': 'chunked',
          'Accept': 'application/json, text/javascript, */*; q=0.01',
          'Origin': 'http://m.maoyan.com',
          'Referer': 'http://m.maoyan.com/cinema/movie/1206824?$from=canary',
          'User-Agent': ' Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
          'X-Requested-With': ' XMLHttpRequest',
          'movieId': '1206824',
          'day': '2019-03-31',
          'offset': '0',
          'limit': '20',
          'districtId': ' -1',
          'lineId': '-1',
          'hallType': '-1',
          'brandId': '-1',
          'serviceId': ' -1',
          'areaId': '-1',
          'stationId': '-1',
          'item': '',
          'updateShowDay': ' true',
          'reqId': '1554025904424',
          'cityId': '197'
        }
      }).then(res => {
        console.log(res)
        store.commit('detailsMuta', res)
      })
    }
  }

})
export default store
