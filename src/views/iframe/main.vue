<template>
  <div>
    外面11
    <button @click="sendToIframe">给iframe传值</button>
    <iframe :src="'http://localhost:8090/#/iframe/son'" frameborder="0" ref="iframe"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iframeWindow: null,
    };
  },
  mounted() {
    this.iframeWindow = this.$refs.iframe.contentWindow;
    window.addEventListener("message", this.receive);
  },
  methods: {
    sendToIframe() {
      console.log(';;;')
      this.iframeWindow.postMessage("2323", "*");
      //   console.log(this.iframeWindow);
      // this.iframeWindow.receive('pppp')
    },
    receive() {
      console.log("收到子数据");
    },
  },
};
</script>

<style></style>
