class MessageBridge {
  constructor(options = {}) {
    this.targetWindow = null;
    this.messageQueue = [];
    this.isReady = false;
    this.handlers = new Map();

    // 监听消息
    window.addEventListener("message", this.handleMessage.bind(this));

    // 如果是子窗口，发送就绪消息
    if (window.opener) {
      window.opener.postMessage({ type: "READY" }, "*");
    }
  }

  // 连接目标窗口
  connect(targetWindow) {
    this.targetWindow = targetWindow;
  }

  // 发送消息
  send(type, data) {
    const message = { type, data };

    if (!this.isReady) {
      console.log("进来", this.isReady);

      this.messageQueue.push(message);
      return;
    }

    this.sendMessage(message);
  }

  // 实际发送消息
  sendMessage(message) {
    console.log(this.targetWindow);
    if (this.targetWindow) {
      this.targetWindow.postMessage(message, "*");
    }
  }

  // 处理接收到的消息
  handleMessage(event) {
    const { type, data } = event.data;

    if (type === "READY") {
      this.isReady = true;
      this.flushMessageQueue();
      return;
    }

    const handlers = this.handlers.get(type);
    if (handlers) {
      handlers.forEach((handler) => handler(data));
    }
  }

  // 发送队列中的消息
  flushMessageQueue() {
    while (this.messageQueue.length > 0) {
      const message = this.messageQueue.shift();
      this.sendMessage(message);
    }
  }

  // 注册消息处理器
  on(type, handler) {
    if (!this.handlers.has(type)) {
      this.handlers.set(type, new Set());
    }
    this.handlers.get(type).add(handler);
  }

  // 移除消息处理器
  off(type, handler) {
    const handlers = this.handlers.get(type);
    if (handlers) {
      handlers.delete(handler);
    }
  }

  // 销毁实例
  destroy() {
    window.removeEventListener("message", this.handleMessage.bind(this));
    this.handlers.clear();
    this.messageQueue = [];
  }
}

export default MessageBridge;
