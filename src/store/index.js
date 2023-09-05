import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // state 类似 data
    //这里面写入数据
    aa:'lll'
  },
  getters:{
    // getters 类似 computed
    // 在这里面写个方法
  },
  mutations:{
    setAA(state) {
      state.aa = "ppp"
    }
    // mutations 类似methods
    // 写方法对数据做出更改(同步操作)
  },
  actions:{
    // actions 类似methods
    // 写方法对数据做出更改(异步操作)
  }


})
