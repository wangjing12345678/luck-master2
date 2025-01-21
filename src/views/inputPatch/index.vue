<template>
  <div>
    <div @click="toPage">按钮</div>
    <el-input v-model="aaa" maxlength="10" show-word-limit></el-input>
    <el-input v-model="bbb" show-word-limit type="textarea"></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aaa: "iii",
      bbb: "ooo",
    };
  },
  methods: {
    toPage() {
      this.$router.push("/AbortController");
    },
  },
  mounted() {
    this.$store.commit("setaxiosFlag", false);
  },
};
</script>

<style></style>
