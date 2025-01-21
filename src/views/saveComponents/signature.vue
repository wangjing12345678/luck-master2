<template>
  <div class="signature-wrapper">
    <!-- 画布容器 -->
    <div class="canvas-container">
      <canvas
        ref="signatureCanvas"
        :width="width"
        :height="height"
        @mousedown="startDrawing"
        @mousemove="draw"
        @mouseup="stopDrawing"
        @mouseleave="stopDrawing"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="stopDrawing"
      ></canvas>
    </div>
    
    <!-- 操作按钮 -->
    <div class="controls">
      <button @click="clear">清除</button>
      <button @click="save">保存</button>
      <div class="pen-settings">
        <span>画笔粗细：</span>
        <input 
          type="range" 
          v-model.number="lineWidth" 
          min="1" 
          max="10"
        >
        <span>颜色：</span>
        <input 
          type="color" 
          v-model="lineColor"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signature',
  
  props: {
    // 画布宽度
    width: {
      type: Number,
      default: 800
    },
    // 画布高度
    height: {
      type: Number,
      default: 300
    },
    // 保存格式
    saveFormat: {
      type: String,
      default: 'png',
      validator: function(value) {
        return ['png', 'jpeg', 'webp'].indexOf(value) !== -1
      }
    }
  },

  data() {
    return {
      canvas: null,
      context: null,
      isDrawing: false,
      lastX: 0,
      lastY: 0,
      lineWidth: 2,
      lineColor: '#000000',
      hasSignature: false
    }
  },

  mounted() {
    this.initCanvas();
  },

  methods: {
    // 初始化画布
    initCanvas() {
      this.canvas = this.$refs.signatureCanvas;
      this.context = this.canvas.getContext('2d');
      
      // 设置画布背景为白色
      this.context.fillStyle = '#ffffff';
      this.context.fillRect(0, 0, this.width, this.height);
      
      // 设置默认画笔样式
      this.context.lineJoin = 'round';
      this.context.lineCap = 'round';
    },

    // 开始绘制
    startDrawing(event) {
      this.isDrawing = true;
      const { offsetX, offsetY } = this.getCoordinates(event);
      this.lastX = offsetX;
      this.lastY = offsetY;
    },

    // 绘制过程
    draw(event) {
      if (!this.isDrawing) return;
      
      const { offsetX, offsetY } = this.getCoordinates(event);
      
      this.context.beginPath();
      this.context.lineWidth = this.lineWidth;
      this.context.strokeStyle = this.lineColor;
      this.context.moveTo(this.lastX, this.lastY);
      this.context.lineTo(offsetX, offsetY);
      this.context.stroke();
      
      this.lastX = offsetX;
      this.lastY = offsetY;
      this.hasSignature = true;
    },

    // 停止绘制
    stopDrawing() {
      this.isDrawing = false;
    },

    // 处理触摸开始事件
    handleTouchStart(event) {
      event.preventDefault();
      const touch = event.touches[0];
      const rect = this.canvas.getBoundingClientRect();
      this.lastX = touch.clientX - rect.left;
      this.lastY = touch.clientY - rect.top;
      this.isDrawing = true;
    },

    // 处理触摸移动事件
    handleTouchMove(event) {
      event.preventDefault();
      if (!this.isDrawing) return;
      
      const touch = event.touches[0];
      const rect = this.canvas.getBoundingClientRect();
      const offsetX = touch.clientX - rect.left;
      const offsetY = touch.clientY - rect.top;
      
      this.context.beginPath();
      this.context.lineWidth = this.lineWidth;
      this.context.strokeStyle = this.lineColor;
      this.context.moveTo(this.lastX, this.lastY);
      this.context.lineTo(offsetX, offsetY);
      this.context.stroke();
      
      this.lastX = offsetX;
      this.lastY = offsetY;
      this.hasSignature = true;
    },

    // 获取坐标
    getCoordinates(event) {
      if (event.offsetX && event.offsetY) {
        return {
          offsetX: event.offsetX,
          offsetY: event.offsetY
        };
      }
      const rect = this.canvas.getBoundingClientRect();
      return {
        offsetX: event.clientX - rect.left,
        offsetY: event.clientY - rect.top
      };
    },

    // 清除画布
    clear() {
      this.context.fillStyle = '#ffffff';
      this.context.fillRect(0, 0, this.width, this.height);
      this.hasSignature = false;
      this.$emit('clear');
    },

    // 保存签名
    save() {
      if (!this.hasSignature) {
        this.$emit('error', '请先签名');
        return;
      }
      
      try {
        const imageData = this.canvas.toDataURL(`image/${this.saveFormat}`);
        this.$emit('save', imageData);
      } catch (error) {
        this.$emit('error', error);
      }
    },

    // 获取签名是否为空
    isEmpty() {
      return !this.hasSignature;
    }
  }
}
</script>

<style scoped>
.signature-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.canvas-container {
  border: 1px solid #ccc;
  background: #fff;
}

canvas {
  cursor: crosshair;
  touch-action: none; /* 防止触摸设备上的滚动 */
}

.controls {
  display: flex;
  gap: 10px;
  align-items: center;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: #4CAF50;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #45a049;
}

.pen-settings {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>