<template>
  <div id="app">
    {{ title }}
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    // window.open('http://localhost:8080/#/dragPanel', 'baidu');
  },
  computed: {
    title() {
      return process.env.VUE_APP_TITLE;
    },
  },
  methods: {
    aa() {
      switch (1) {
        case 2:
          break;
      }
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
</style>
