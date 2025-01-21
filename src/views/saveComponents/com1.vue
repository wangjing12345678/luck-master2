<template>
  <div>
    <el-form :model="form">
      <el-form-item>
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-table :data="form.list" style="width: 100%">
        <el-table-column label="日期" width="180" prop="date">
          <template slot-scope="scope">
            <el-input v-model="scope.row.date"></el-input>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
  </div>
</template>

<script>
import { pageStoreMixin } from "./mixin";
export default {
  name: "com1",
  mixins: [pageStoreMixin],
  data() {
    return {
      form: {
        list: [{ date: "222" }, { date: "333" }],
      },
    };
  },
};
</script>

<style></style>
