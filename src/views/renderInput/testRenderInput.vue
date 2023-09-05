<template>
  <div>
    <!-- <renderInput v-model="kkk" @kkkk="kkkk"></renderInput>
    <renderJsx></renderJsx> -->
    <WangTest></WangTest>
  </div>
</template>

<script>
import renderInput from "./renderInput";
import renderJsx from "./renderJsx";
import { WangTest } from "publish-project-wang-only";
export default {
  data() {
    return {
      kkk: "kkkk",
    };
  },
  components: {
    renderInput,
    renderJsx,
    WangTest,
  },
  mounted() {
    const jjj = () => {};
    console.dir(jjj);
  },
  methods: {
    kkkk() {
      console.log(this.kkk);
    },
  },
};
</script>

<style></style>
