<template>
   <el-table
   ref="tablekkk"
    :data="tableData"
    :height="tableHieght"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableHieght: 500,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    mounted(){
        this.$nextTick(() => {
            this.calcHeight()
            console.log(this.tableHieght)
            this.$refs.tablekkk.doLayout()
        })

        window.addEventListener('resize', this.calcHeight);
        
    },
    methods:{
        calcHeight(){
            let topHeight = document.querySelector('.top-search')
            console.log(topHeight.offsetHeight)
            let allHeight =   document.querySelector('.layout').offsetHeight
            console.log(allHeight)
            this.tableHieght = allHeight - topHeight.offsetHeight
        }
    }
  }
</script>

<style>

</style>