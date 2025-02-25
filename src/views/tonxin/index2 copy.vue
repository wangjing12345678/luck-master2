<template>
  <div @click="sendToParent">通2222信 {{ mmm }}</div>
</template>

<script>
import CrossPageMessage from "./connect";
export default {
  data() {
    return {
      mmm: "",
      channel: null,
    };
  },
  mounted() {
    this.channel = new BroadcastChannel("tonxin");
    this.channel.addEventListener("aa", (e) => {
      console.log(e.data.data);
      this.mmm = e.data.data;
      // e.source.postMessage("Hello from child", e.origin);
    });
  },
  methods: {
    sendToParent() {
      // console.log('pppp')
      this.channel.postMessage({
        type:'bb',
        data:'vv',
        timestamp: Date.now(),
      });
    },
  },
};
</script>

<style></style>
