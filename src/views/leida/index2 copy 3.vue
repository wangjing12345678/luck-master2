<template>
  <div class="loader"></div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
/*body {
  /~ 100%窗口宽高 ~/
  min-height: 100vh;
  /~ 弹性布局 居中演示 ~/
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
}*/
.loader {
  /* css变量 环的宽度 */
  --s: 15px;
  width: calc(16 * var(--s));
  height: calc(16 * var(--s));
  border-radius: 50%;
  /* 网格布局 */
  display: grid;
  /* 渐变蒙版 */
  -webkit-mask: radial-gradient(50% 50%, #0000 calc(99% - 2 * var(--s)), #000 calc(100% - 2 * var(--s)));
  /* 执行动画：动画名 时长 线性 循环播放 */
  /* animation: spin 3s linear infinite; */
}
.loader::before {
  content: "";
  /* 圆锥渐变 */
  background: conic-gradient(from 25deg, #70a1d7 25%, rgba(0,0,0,0) 0 50%, rgba(0,0,0,0) 0 75%, rgba(0,0,0,0) 0);
  /* 渐变蒙版 */
  -webkit-mask: repeating-conic-gradient(#0000 0 25deg, #000 23% 25%),
    radial-gradient(var(--s) at var(--s) 50%, #000 97%, #0000) left/calc(100% - 2 * var(--s)) 100% repeat-x,
    radial-gradient(var(--s) at 50% var(--s), #000 97%, #0000) top/100% calc(100% - 2 * var(--s)) repeat-y;
}

/* 定义动画 */
@keyframes spin {
  to {
    /* 旋转一周 */
    transform: rotate(1turn);
  }
}
</style>
