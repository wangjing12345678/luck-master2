<template>
    <div id="app">
        <div><el-button type="success" @click="outExcel">导出excel</el-button></div>
        <el-table
                :data="jsonData"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="id"
                    label="学号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="age"
                    label="年龄">
            </el-table-column>
            <el-table-column
                    prop="classes"
                    label="学院">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
  import {xlsx} from '@/utils/getXlsx'

  export default {
    data() {
      return {
        routerFlag:false,
        jsonData:[{
          id:'1',
          name:'小智',
          age:18,
          classes:'商学院'

        },
          {
            id:'2',
            name:'小白',
            age:19,
            classes:'商学院'

          },
          {
            id:'3',
            name:'小蓝',
            age:12,
            classes:'商学院'

          },
          {
            id:'4',
            name:'小花',
            age:14,
            classes:'商学院'

          },
          {
            id:'5',
            name:'小粉',
            age:15,
            classes:'商学院'

          },
          {
            id:'6',
            name:'小黄',
            age:16,
            classes:'商学院'

          },
          {
            id:'7',
            name:'小红',
            age:17,
            classes:'商学院'

          },
          {
            id:'8',
            name:'小黑',
            age:19,
            classes:'商学院'

          },
        ],
        listHander:{
          id:'学号',
          name:'姓名',
          age:'年龄',
          classes:'学院'
        },
        routerFlag : false
      }
    },
    mounted(){
      console.log(this.redirectPage('index1',this.$router.options.routes))
    },
    methods: {
      outExcel(){
        xlsx(this.jsonData,this.listHander,'学生')
      },
      redirectPage(searchItem,allRoutes,resultArr = []) {
        for(var i = 0; i<allRoutes.length; i++){
          if (allRoutes[i].children && allRoutes[i].children.length) {
             this.redirectPage(searchItem,allRoutes[i].children,resultArr);
          }else{
            if (allRoutes[i].path == searchItem) {
              resultArr.push(allRoutes[i].path)
            }
          }
        }
        return resultArr
      },
      redirectPage2(allRoutes) {
        allRoutes.forEach(ev => {
          if (ev.path == "index2") {
            this.routerFlag = true;
          }
          if (ev.children && ev.children.length) {
            this.redirectPage2(ev.children);
          }
        });
      }
    },
  }
</script>

<style>

</style>
