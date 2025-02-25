<template>
  <div class="child-page">
    <button @click="sendMessage">发送消息到父页面</button>
    
    <div v-if="receivedMessage" class="message-box">
      {{ receivedMessage }}
    </div>
  </div>
</template>

<script>
import MessageBridge from './connect';

export default {
  name: 'ChildPage',
  
  data() {
    return {
      messageBridge: null,
      receivedMessage: null
    }
  },
  
  created() {
    this.messageBridge = new MessageBridge();
    this.messageBridge.isReady = true
    
    // 监听父页面消息
    this.messageBridge.on('PARENT_MESSAGE', this.handleParentMessage);
  },
  
  beforeDestroy() {
    this.messageBridge.destroy();
  },
  
  methods: {
    sendMessage() {

      this.messageBridge.connect(window.opener);

      console.log('ppp')
      this.messageBridge.send('CHILD_MESSAGE', {
        text: '来自子页面的消息',
        timestamp: Date.now()
      });
    },
    
    handleParentMessage(data) {
      this.receivedMessage = data;
    }
  }
}
</script>

<style scoped>
.child-page {
  padding: 20px;
}

.message-box {
  margin-top: 20px;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 4px;
}
</style>