<template>
  <div>
    <button @click="sendToParent">给外层</button>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("message", this.receive);
  },
  methods: {
    receive(val) {
      console.log(val.data);
      window.parent.postMessage({type:'parent'}, '*');
    },
    sendToParent() {
      // console.log(window.parent);
      //   window.parent.receive("给你");
    },
  },
};
</script>

<style></style>
