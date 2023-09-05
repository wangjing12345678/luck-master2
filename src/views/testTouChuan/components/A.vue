<template>
<div>
    <Bcom v-bind="$attrs" v-on="$listeners"></Bcom>
</div>
  
</template>

<script>
import Bcom from './B.vue'
export default {
    components:{
        Bcom
    }
}
</script>

<style>

</style>