<template>
  <div>
    222
  </div>
</template>

<script>
export default {
  mounted() {
    // 获取网络状态
    console.log(navigator.onLine);
    window.addEventListener("offline", () => {
      console.log("offline");
    });
    // 获取强网还是弱网
    console.log(navigator.connection);
    // {
    //   downlink: 8.3; //下载速度
    //   effectiveType: "4g"; //速度类型 跟设备没有关系 不会连wifi显示wifi 
    //   onchange: null; //
    //   rtt: 200; // 请求往返时间
    //   saveData: false; //数据节省模式
    // }
  },
  created() {},
  methods: {},
};
</script>

<style></style>
