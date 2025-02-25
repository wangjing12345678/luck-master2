<template>
  <div @click="testToxin">通信</div>
</template>

<script>
// import CrossPageMessage from "./connect";
export default {
  data() {
    return {
      messenger: null,
    };
  },
  mounted() {
    this.channel = new BroadcastChannel("tonxin");
    this.channel.addEventListener("bb", (e) => {
      console.log(e);
    });
  },
  methods: {
    testToxin() {
      window.open("http://localhost:8090/#/tonxin2", "ooo");
      this.channel.postMessage({
        type: "aa",
        data: "000",
        timestamp: Date.now(),
      });
    },
  },
};
</script>

<style></style>
