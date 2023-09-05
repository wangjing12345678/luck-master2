<template>
    <div>
        2323
        <input type="text" v-model="kk">
    </div>

</template>

<script>
  export default {
    name: "index1",
    data(){
      return{
        kk:'iii'
      }
    },
    mounted(){
      console.log(this)
      this.$store.commit('setAA')
      console.log(this.$store.state.aa)
    }
  }
</script>

<style scoped>

</style>