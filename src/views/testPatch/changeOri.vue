<template>
  <div>
    <el-dialog title="提示" :visible="true" width="1000px">
      <el-table :data="tableData" style="width: 100%" border :max-height="maxH">
        <el-table-column prop="date" label="日期" width="900"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="100"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </el-dialog>
    <!-- <el-button type="primary">哈哈</el-button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxH:undefined,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  created(){
    this.maxH = '300px'
  }
};
</script>

<style></style>
