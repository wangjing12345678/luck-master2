<template>
  <div class="box">
    <span style="--i: 1"></span>
    <span style="--i: 2"></span>
    <span style="--i: 3"></span>
    <span style="--i: 4"></span>
    <span style="--i: 5"></span>
    <span style="--i: 6"></span>
    <span style="--i: 7"></span>
    <span style="--i: 8"></span>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* :root {
  --background-color: #2c3e50;
  --border-color: #7591ad;
  --text-color: #34495e;
  --color1: #ec3e27;
  --color2: #fd79a8;
  --color3: #0984e3;
  --color4: #00b894;
  --color5: #fdcb6e;
  --color6: #e056fd;
  --color7: #f97f51;
  --color8: #bdc581;
  这里也是定义的变量--开始的
} */

* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 14px;
}

/* body {
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif, Arial, "Microsoft Yahei";
} */

.box {
  position: relative;
  width: 400px;
  height: 400px;
  /* background-color: lawngreen; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.box span {
  position: absolute;
  /* border: 1px solid #fff; */
  background-color: var(--color3);
  box-sizing: border-box;
  border-radius: 100%;
  animation: animate 3s linear infinite;
  animation-delay: calc(0.5s * var(--i));
}

@keyframes animate {
  0% {
    width: 0;
    height: 0;
    opacity: 0.5;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    width: 400px;
    height: 400px;
    opacity: 0;
  }
}
</style>
