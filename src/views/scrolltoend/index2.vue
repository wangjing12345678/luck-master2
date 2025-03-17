<template>
  <div class="aa" :style="heightStyle">jjjjj
    <input type="text" name="" id="" v-model="customHeight">
  </div>
</template>

<script>
export default {
  data() {
    return {
      customHeight: 10,
    };
  },
  computed: {
    heightStyle() {
      return `--aa-height:${this.customHeight}px`;
    },
  },
};
</script>

<style>
/* css变量 */
.aa {
  /* --aa-height: 20px; */
  height: var(--aa-height);
}
</style>
