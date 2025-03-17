<template>
  <div :data-theme="radio" class="wrapaa">
    <div>
      <el-radio-group v-model="radio">
        <el-radio :label="'blue'">蓝色</el-radio>
        <el-radio :label="'red'">红色</el-radio>
        <el-radio :label="'green'">绿色</el-radio>
      </el-radio-group>

      <div class="back-change"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oVal: "blue",
      radio: "blue",
    };
  },
};
</script>
<style lang="scss" scoped>
.wrapaa[data-theme="blue"] {
  --dynamic-color: blue;
}
.wrapaa[data-theme="red"] {
  --dynamic-color: red;
}
.wrapaa[data-theme="green"] {
  --dynamic-color: green;
}
.back-change {
  width: 600px;
  height: 600px;
  background-color: var(--dynamic-color, #fff);
}
</style>
