<template>
    <div id="app">
        <HereMap
                apikey="LF8deDtN051inaIqshBOE1CY5QDkoWAfikyd2Xuwjng"
                lat="37.7397"
                lng="-121.4252"
                width="100%"
                height="835px" />
    </div>
</template>

<script>
  import HereMap from "./components/HereMap.vue"

  export default {
    name: 'app',
    components: {
      HereMap
    }
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
