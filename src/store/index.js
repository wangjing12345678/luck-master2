import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // state 类似 data
    //这里面写入数据
    aa: "lll",
    axiosFlag: false,
  },
  getters: {
    // getters 类似 computed
    // 在这里面写个方法
  },
  mutations: {
    setAA(state) {
      state.aa = "ppp";
    },
    setaxiosFlag(state, val) {
      console.log("pppp", val);
      state.axiosFlag = val;
    },
    // mutations 类似methods
    // 写方法对数据做出更改(同步操作)
  },
  actions: {
    // actions 类似methods
    // 写方法对数据做出更改(异步操作)
  },
});
