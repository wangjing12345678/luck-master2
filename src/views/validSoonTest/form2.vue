<template>
  <div>
    <el-form-item label="aaa" prop="aaa">
      <el-input type="textarea" v-model="form.aaa"></el-input>
    </el-form-item>
    <el-form-item label="bbb" prop="bbb">
      <el-input type="textarea" v-model="form.bbb"></el-input>
    </el-form-item>
  </div>
</template>

<script>
export default {
  props: {
    form: {},
  },
};
</script>

<style></style>
