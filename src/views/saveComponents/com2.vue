<template>
  <div>
    <el-form :model="form">
      <el-form-item>
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "com2",
  data() {
    return {
      form: {
        name: 2,
      },
    };
  },
};
</script>

<style></style>
