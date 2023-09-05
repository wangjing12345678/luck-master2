<template>
  <div>
    <input type="text" v-model="aa" />
    <button @click="sendMessage">点击发送</button>
    <button @click="closeSocket">断开</button>
    <span v-for="(x, index) in messageArr" :key="index">{{ x }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ws: null,
      aa: "",
      hhh: "",
      messageArr: [],
    };
  },
  mounted() {
    const ws = new WebSocket("ws://localhost:8080");
    this.ws = ws;
    this.ws.addEventListener("open", (e) => {
      console.log("连接成功");
    });
    this.ws.addEventListener("message", (e) => {
      console.log("连接成功");
      if (e.data === "ping") {
        console.log("心跳");
      } else {
        this.messageArr.push(e.data);
      }
    });
  },
  methods: {
    sendMessage() {
      this.ws.send(this.aa);
    },
    closeSocket() {
      this.ws.close();
    },
  },
};
</script>

<style></style>
