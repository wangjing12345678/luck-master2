<template>
    <div>
        <router-link  to="/keep/index1">12121</router-link>
        <router-link  to="/keep/index2">1212</router-link>
        <div @click="removeCache">清除缓存</div>
        <keepaliveWang :saveCache="saveCache" ref="keepaliveWang" @set-ref="ref1 = $event">
            <router-view></router-view>
        </keepaliveWang>
    </div>
</template>

<script>
  import  keepaliveWang from './keep-alive-wang'
  export default {
    name: "keepAlive",
    components:{
      keepaliveWang
    },
    data(){
      return{
        saveCache:['index1'],
        ref1:''
      }
    },
    methods:{
      removeCache(){
        console.log(this.$refs)
        console.log(this.ref1)
        // this.$refs['keepaliveWang'].removeItem('index1')
        // this.ref1.removeItem()
      }
    },
    watch:{
      $route:{
        handler(val,oldval){
          // this.ref1.removeItem('index1')
          // this.ref1.removeItem('index2')
        },
      }
    }
  }
</script>

<style scoped>

</style>