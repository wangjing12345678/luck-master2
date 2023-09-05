<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted(){
    // window.open('http://localhost:8080/#/dragPanel', 'baidu');
  },
  methods:{
    aa(){
      switch (1) {
        case 2:
          break

      }
    }
  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
  .clearfix:after{
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
</style>
