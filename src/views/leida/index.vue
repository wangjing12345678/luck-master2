<template>
  <div class="wrap">
    <div class="container">
      <span style="--i: 1"></span>
      <span style="--i: 3"></span>
      <span style="--i: 5"></span>
      <span style="--i: 7"></span>
      <span style="--i: 9"></span>
      <div class="width-border-box">
        <span style="--i: 1"></span>
        <span style="--i: 3"></span>
        <span style="--i: 5"></span>
        <span style="--i: 7"></span>
        <span style="--i: 9"></span>
      </div>
      <div class="back-image"></div>
      <div class="main">
        <div class="tangjialing">
          <div class="pointer">
            <div class="pointer-back"></div>
            <div class="pointer-single"></div>
          </div>

          <div class="center">
            <div class="rotate-left-box">
              <div></div>
            </div>
            <div class="rotate-right-box">
              <div></div>
            </div>
            <div class="white-box">
              <div class="word-box">实时守护中</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.wrap {
  width: 900px;
  height: 700px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  width: 600px;
  height: 600px;
  background: url("~@/assets/image/aa.png");
  /* background-image: url("~@/assets/image/15531740478639_.pic.jpg"); */
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* .box {
  position: relative;
  width: 400px;
  height: 400px;
  background-color: lawngreen;
  display: flex;
  justify-content: center;
  align-items: center;
} */
.back-image {
}

.container span {
  position: absolute;
  width: 300px;
  height: 300px;

  /* border: 1px solid #fff; */
  /* background-color: rgba(189, 205, 251, 0.5);
   */
  background: rgba(255, 255, 255, 0.2);
  /* background: red; */
  /* background: red; */

  /* background: red; */
  box-sizing: border-box;
  border-radius: 100%;
  animation: animate 3s linear infinite;
  animation-delay: calc(0.5s * var(--i));
  border: none;
}
.width-border-box {
  position: absolute;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.width-border-box span {
  position: absolute;
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  /* background: red; */
  border: 2px solid rgba(255, 255, 255, 0.6);
  /* border: 1px solid #fff; */
  /* background-color: rgba(189, 205, 251, 0.5);
   */
  /* background: rgba(255, 255, 255, 0.3); */
  /* background: red; */
  box-sizing: border-box;
  border-radius: 100%;
  animation: animate2 3s linear infinite;
  animation-delay: calc(0.5s * var(--i));
}

@keyframes animate {
  0% {
    width: 300px;
    height: 300px;
    opacity: 0.5;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    width: 600px;
    height: 600px;
    opacity: 0;
  }
}
@keyframes animate2 {
  0% {
    width: 334px;
    height: 334px;
    opacity: 0.5;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    width: 590px;
    height: 590px;
    opacity: 0;
  }
}
/* .container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      rgba(99, 123, 236, 0.5) 25%,
      rgba(99, 123, 236, 0.5) 26%,
      transparent 27%,
      transparent 74%,
      rgba(99, 123, 236, 0.5) 75%,
      rgba(99, 123, 236, 0.5) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      rgba(99, 123, 236, 0.5) 25%,
      rgba(99, 123, 236, 0.5) 26%,
      transparent 27%,
      transparent 74%,
      rgba(99, 123, 236, 0.5) 75%,
      rgba(99, 123, 236, 0.5) 76%,
      transparent 77%,
      transparent
    );
  background-size: 7rem 7rem;
  background-position: -5.2rem -5.2rem;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0;
  margin: 0;
  font-size: 1.6rem;
  box-shadow: 0 0 100px 100px rgba(226, 233, 253, 0.3);
} */
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  /* background: rgba(226, 233, 253, 0.4); */
  /* box-shadow: 0 0 100px 100px rgba(226, 233, 253, 0.3); */
}

.center {
  width: 334px;
  height: 334px;
  border-radius: 50%;
  background: #5c8cff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: #fff;
  z-index: 99;
  box-shadow: 0px 0px 60px 0px rgba(55,114,255,0.4);
}

.tangjialing {
  width: 334px;
  height: 334px;
  max-height: 75vh;
  max-width: 75vh;
  position: relative;
  border-radius: 50%;
  /* border: 0.2rem solid #fff; */
  /* overflow: hidden; */
}
.tangjialing:before {
  /* content: " ";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: bei 5s infinite;
  animation-timing-function: linear;
  animation-delay: 1.4s; */
}
.pointer {
  position: relative;
  background: #c7d4fb;
  width: 4px;
  height: 320px;
  position: absolute;
  top: -160px;
  left: 50%;
  animation: zhuan 5s infinite;
  animation-timing-function: linear;
  transform-origin: bottom right;
  border-radius: 100% 0 0 0;
  /* box-shadow: -6px 0 10px #c7d4fb; */
}
.pointer-back {
  height: 320px;
  width: 80px;
  right: 0;
  position: absolute;

  background: radial-gradient( ellipse  at 127% 86%, rgba(158, 186, 255, 0.95) 0%, rgba(232, 239, 255, 0.22) 74%, rgba(255, 255, 255, 0) 100%);
}
/* .tangjialing:after {
  content: " ";
  display: block;
 
} */
@keyframes zhuan {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes bei {
  14% {
    background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%);
  }
  14.0002% {
    background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%),
      radial-gradient(2vmin circle at 63% 72%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%);
  }
  25% {
    background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%),
      radial-gradient(2vmin circle at 63% 72%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%),
      radial-gradient(2vmin circle at 56% 86%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%);
  }
  26% {
    background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%),
      radial-gradient(2vmin circle at 63% 72%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%),
      radial-gradient(2vmin circle at 56% 86%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%);
    opacity: 1;
  }
  100% {
    background: radial-gradient(2vmin circle at 75% 70%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%),
      radial-gradient(2vmin circle at 63% 72%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%),
      radial-gradient(2vmin circle at 56% 86%, #ffffff 10%, #20ff4d 30%, rgba(255, 255, 255, 0) 100%);
    opacity: 0;
  }
}

.rotate-left-box {
  position: absolute;
  width: 334px;
  height: 334px;
  transform: scaleY(-1);
}
.rotate-left-box div,
.rotate-right-box div {
  position: absolute;
  /* css变量 环的宽度 */
  --s: 6px;
  width: 334px;
  height: 334px;
  border-radius: 50%;
  /* 网格布局 */
  display: grid;
  /* 渐变蒙版 */
  -webkit-mask: radial-gradient(50% 50%, #0000 calc(99% - 2 * var(--s)), #000 calc(100% - 2 * var(--s)));
  /* 执行动画：动画名 时长 线性 循环播放 */
  animation: spin 3s linear infinite;
}
.rotate-left-box div::before,
.rotate-right-box div::before {
  content: "";
  /* 圆锥渐变 */
  background: conic-gradient(from 25deg, #fff 25%, rgba(0, 0, 0, 0) 0 50%, rgba(0, 0, 0, 0) 0 75%, rgba(0, 0, 0, 0) 0);
  /* 渐变蒙版 */
  -webkit-mask: repeating-conic-gradient(#0000 0 25deg, #000 23% 25%),
    radial-gradient(var(--s) at var(--s) 50%, #000 97%, #0000) left/calc(100% - 2 * var(--s)) 100% repeat-x,
    radial-gradient(var(--s) at 50% var(--s), #000 97%, #0000) top/100% calc(100% - 2 * var(--s)) repeat-y;
}
.rotate-right-box {
  position: absolute;
  width: 334px;
  height: 334px;
  transform: scaleX(-1);
}

/* 定义动画 */
@keyframes spin {
  to {
    /* 旋转一周 */
    transform: rotate(1turn);
  }
}
.white-box {
  position: absolute;
  height: 314px;
  width: 314px;
  /* background-image: rgba(255, 255, 255, 0.4); */
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 10px solid #ffff; */
  background-image: linear-gradient(151deg, rgba(94, 141, 255, 1), rgba(186, 206, 255, 1), rgba(112, 154, 255, 1));
  border-radius: 50%;

  padding: 1px;
  box-sizing: border-box;
}
.word-box {
  width: 290px;
  height: 290px;
  background: #5c8cff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #fff;
}
</style>
