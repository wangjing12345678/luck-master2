<template>
    <div>
        <input type="text" v-model="kk">
    </div>
    
</template>

<script>
  export default {
    name: "index2",
    data(){
      return{
        kk:'iii'
      }
    },
    mounted(){
      console.log(this.$store.state.aa)
    }
  }
</script>

<style scoped>

</style>