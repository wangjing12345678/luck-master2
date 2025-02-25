<template>
  <div class="loading-container">
    <div class="loading-circle">
      <div class="inner-content">
        Loading...
      </div>
    </div>
  </div>
</template>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

.loading-circle {
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-circle::before,
.loading-circle::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid transparent;
}

.loading-circle::before {
  border-top-color: #4ecdc4;
  animation: spin 5s linear infinite;
}
/* 
.loading-circle::after {
  border-right-color: #ff6b6b;
  animation: spin 1.5s linear reverse infinite;
} */

.inner-content {
  font-size: 14px;
  color: #333;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>