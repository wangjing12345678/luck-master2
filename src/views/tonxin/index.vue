<template>
  <div class="parent-page">
    <!-- <button @click="openChildWindow">打开子页面</button> -->
    <button @click="sendMessage">发送消息</button>

    <!-- 显示接收到的消息 -->
    <div v-if="receivedMessage" class="message-box">收到消息：{{ receivedMessage }}</div>
  </div>
</template>

<script>
import MessageBridge from "./connect";

export default {
  name: "ParentPage",

  data() {
    return {
      childWindow: null,
      messageBridge: null,
      receivedMessage: null,
    };
  },

  created() {
    this.messageBridge = new MessageBridge();

    // 监听子页面消息
    this.messageBridge.on("CHILD_MESSAGE", this.handleChildMessage);
  },

  beforeDestroy() {
    // 清理资源
    if (this.childWindow) {
      this.childWindow.close();
    }
    this.messageBridge.destroy();
  },

  methods: {
    // openChildWindow() {
    //   // 打开子页面
    //   this.childWindow = window.open("http://localhost:8090/#/tonxin2", "_blank");
    //   this.messageBridge.connect(this.childWindow);
    // },

    sendMessage() {
      this.childWindow = window.open("http://localhost:8090/#/tonxin2", "000");
      this.messageBridge.connect(this.childWindow);
      this.messageBridge.send("PARENT_MESSAGE", {
        text: "来自父页面的消息",
        timestamp: Date.now(),
      });
    },

    handleChildMessage(data) {
      this.receivedMessage = data;
    },
  },
};
</script>

<style scoped>
.parent-page {
  padding: 20px;
}

.message-box {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
