<template>
  <div @click.stop="kkk" class="xin">
    com1
    {{ ooo }}
    {{ $options.customOption }}
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {},
  },
  data() {
    return {
      ooo: "999",
    };
  },
  methods: {
    kkk() {
      this.$emit("aaa");
    },
  },
};
</script>

<style></style>
