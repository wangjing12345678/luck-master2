<template>
  <div class="gradient-circle" :style="circleStyle">
    <div class="circle-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GradientCircle',
  props: {
    size: {
      type: Number,
      default: 100
    },
    borderWidth: {
      type: Number,
      default: 3
    },
    duration: {
      type: Number,
      default: 3
    },
    colors: {
      type: Array,
      default: () => ['#ff6b6b', '#4ecdc4', '#45b1ff', '#a890fe']
    }
  },
  computed: {
    circleStyle() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
        '--border-width': `${this.borderWidth}px`,
        '--animation-duration': `${this.duration}s`,
        '--gradient-colors': this.colors.join(',')
      }
    }
  }
}
</script>

<style scoped>
.gradient-circle {
  position: relative;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    var(--gradient-colors)
  );
  background-size: 400%;
  animation: rotate var(--animation-duration) linear infinite;
  padding: var(--border-width);
}

.circle-content {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
    background-position: 0% 50%;
  }
  to {
    transform: rotate(360deg);
    background-position: 100% 50%;
  }
}

.gradient-circle:hover {
  animation-duration: calc(var(--animation-duration) * 0.5);
}
</style>