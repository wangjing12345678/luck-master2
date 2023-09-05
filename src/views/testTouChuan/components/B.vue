<template>
  <div  @click="testTouchuanClick">
    {{ll }}
    <!-- {{pp }} -->
    <Ccom v-bind="$attrs"></Ccom>
  </div>
</template>

<script>
import Ccom from './C.vue'
export default {
    props:['ll'],
    components:{
        Ccom
    },
    methods:{
        testTouchuanClick(){
            this.$emit('oooo')
        }
    }

}
</script>

<style>

</style>