<template>
    <div>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
    </div>

</template>

<script>
  export default {
    name: "testvideo",
    data(){
      return{
        list:[[{anme:false},{page:false},{bbbb:false}]],
        father:[1,2,3],
        checkedCities:''

      }
    },
    mounted(){

    }
  }
</script>

<style scoped>

</style>