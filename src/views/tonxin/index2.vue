<template>
  <div>通2222信 {{ mmm }}</div>
</template>

<script>
export default {
  data() {
    return {
      mmm: "",
    };
  },
  mounted() {
    const channel = new BroadcastChannel("tonxin");
    channel.addEventListener("message", (e) => {
      console.log(e);
      this.mmm = e.data;
    });
  },
};
</script>

<style></style>
