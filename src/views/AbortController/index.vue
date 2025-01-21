<template>
  <div>
    <div @click="toPage">按钮</div>
  </div>
</template>

<script>
import { getAllImplementType, getOptionListMapByGuids } from "@/api/index.js";
export default {
  methods: {
    test1() {
      getAllImplementType().then((res) => {
        console.log("222", res);
      });
    },
    test2() {
      getOptionListMapByGuids().then((res) => {
        console.log("ooo", res);
      });
    },
    test4() {
      getAllImplementType().then((res) => {
        console.log("eeee", res);
      });
    },
    toPage(){
        this.$router.push('/inputPatch')
    }
  },
  mounted() {
    this.test1();
    this.test2();
    this.test4();
  },
};
</script>

<style></style>
