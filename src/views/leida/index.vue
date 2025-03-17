<template>
  <div>
    <ball class="aaa"></ball>
    <cardWrap></cardWrap>
    <div @click="kkkk">清空cookie</div>
    <div @click="aaa">清空cookie</div>
  </div>
</template>

<script>
import ball from "./components/ball.vue";
import cardWrap from "./components/card-wrap.vue";
export default {
  components: {
    ball,
    cardWrap,
  },
  methods: {
    kkkk() {
      console.log(document.cookie);
      document.cookie = "aa=000";
      // this.delCookie()
      // document.cookie = "";
      // this.deleteAllCookies()
    },
    aaa() {
      this.delCookie();
    },
    delCookie() {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      }
      if (cookies.length > 0) {
        for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          var eqPos = cookie.indexOf("=");
          var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          var domain = location.host.substr(location.host.indexOf("."));
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=" + domain;
        }
      }
    },
    deleteAllCookies() {
      var cookies = document.cookie.split(";");

      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      }
    },
  },
};
</script>

<style>
.aaa {
  transform: scale(0.5);
}
</style>
