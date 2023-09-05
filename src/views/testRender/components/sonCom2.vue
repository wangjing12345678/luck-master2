<template>
    <div>
      <slot name="sonCom2" :items="'sonCom2'"></slot>
    </div>
    

</template>

<script>
  export default {
    name: "sonCom",
    props:{
      items:{
        type:String
      }
    }
  }
</script>

<style scoped>

</style>
