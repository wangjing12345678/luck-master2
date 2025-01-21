<template>
  <div @click="testToxin">通信</div>
</template>

<script>
export default {
  data() {
    return {
      channel: null,
    };
  },
  mounted() {
    this.channel = new BroadcastChannel("tonxin");
  },
  methods: {
    testToxin() {
      this.channel.postMessage("接受");
    },
  },
};
</script>

<style></style>
