<template>
    <div>
      com1111
       <slot name="somCom" :items="items"></slot>
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
