import axios from "axios";
import store from "../store";
let controller = null;
axios.interceptors.request.use(
  (config) => {
    if (!store.state.axiosFlag) {
      if (!controller) {
        controller = new AbortController();
      }
    }
    config.signal = controller.signal;
    if (config.method.toLocaleUpperCase() === "GET") {
      const _t = new Date().getTime();
      if (typeof config.params === "object") {
        config.params._t = _t;
      } else {
        config.params = {
          _t: _t,
        };
      }
    }
    config.headers["Authorization"] =
      "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiLnu4_lip5BIiwiZXhwIjoxNzQ1NzI4NjM3LCJ1c2VySWQiOiIwMWIyZDE3NmYxMTZmMWIxZWU0MTE2YjNmNDY1NGMxOWU5NCIsImlhdCI6MTczNzA4ODYzNywiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9XX0.gMwTkmR9ZPP0B6vrbok3DJwhwUoRkEwfljA4M9_HkvLprxTh3OHkeWPvhc1Lv2qofhlE6uUHMSnnJRbY2Q7-rRuhJpDbaRiPggnLFR1mlKszuFCBH4kBdZAWFxhuR2UH4uTIP1jIZGhUlL-tYyObgStYvVVfJ7XF2Bq961-El5t19w29_yEbefLSl4_DkObz_SFvJIvOROaCQPiTv5-RqwKESf6qsRxmsDL5vyjeH9fNNq2ysffq-QrhQ8IBEs_6ABvzgCs5B7ClFRMJ2-Oa4kTbJV_0GpA_OZBT6SI7gBMT7E7fBCIGmpn9kUvYwAsnJT90MV2EfZvNNoyKfokuiA";
    // config.headers[getLocalTokenKey()] = token; // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    // // 判断是否含有token，若含有token则附加到header中
    // const token = getToken();
    // const allUrl = getUrl(config.url).replace("/psp-web", "") + "$$" + new Date().getTime();
    // const nsssjss = encryptByRSA(allUrl);
    // if (token) {
    //   config.headers[getLocalTokenKey()] = token; // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    //   config.headers.nsssjss = nsssjss;
    // } else {
    //   config.headers[getLocalTokenKey()] = ""; // 增加客户端认证
    //   config.headers.nsssjss = nsssjss;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// let controller = new AbortController();
// HTTPresponse拦截--在响应之后对数据进行一些处理
axios.interceptors.response.use(
  (res) => {
    if (res.data.code == 200) {
      store.commit("setaxiosFlag", true);
      if (store.state.axiosFlag) {
        controller.abort();
        controller = null;
      }
    }
    // NProgress.done(); // 完成进度条
    // /**
    //  * 统一提示错误
    //  * 当数据存在code字段并且不等于success时提示错误信息
    //  * */
    // // 有部分接口返回的是status和message
    // if (res.data.status && !(verifyResIsSuccess(res) || isInWhiteList(res.data.status, responseCode.errorCodeWhiteList))) {
    //   ElementUI.Message({
    //     message: res.data.message,
    //     showClose: true,
    //     type: "error",
    //     duration: 6000,
    //   });
    // } else if (res.data.code && !(verifyResIsSuccess(res) || isInWhiteList(res.data.code, responseCode.errorCodeWhiteList))) {
    //   if (!isLogout) {
    //     ElementUI.Message({
    //       message: res.data.msg,
    //       showClose: true,
    //       type: "error",
    //       duration: 6000,
    //     });
    //     if (res.data.code == "510") {
    //       isLogout = true;
    //       controller.abort();
    //       STORE.storeFun.dispatch("LogOut", res.data.msg);
    //     }
    //   }
    // }
    return res;
  },
  (error) => {
    return Promise.reject(new Error(error));
    // NProgress.done();
    // if (handleUrl(error.request.responseURL)) {
    //   return Promise.reject(error);
    // }
    // const errMsg = error.toString();
    // const code = errMsg.substr(errMsg.indexOf("code") + 5);
    // if ((code === "401" && error.response.status === 40101) || error.response.status === 401) {
    //   controller.abort();
    //   STORE.storeFun.dispatch("LogOut", error.response.data.msg);
    //   return Promise.reject(new Error(error));
    // }
    // ElementUI.Message({
    //   message: errorCode[code] || errorCode["default"],
    //   type: "error",
    //   duration: 5000,
    // });
    // return Promise.reject(new Error(error));
  }
);
export default axios;
