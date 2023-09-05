<template>
  <div class="layout">
    <div class="layout-left"></div>
    <div class="layout-right">
        <div class="top-search"></div>
        <tableareaVue></tableareaVue>
    </div>
  </div>
</template>

<script>
import tableareaVue from './components/tablearea.vue'
export default {
    components:{
        tableareaVue
    }
}
</script>

<style  scoped>
.layout{
    display: flex;
    flex-direction: row;
    height: 100vh;
}
.layout-left{
    width: 200px;
    background: red;
    height: 100%;
    min-width: 200px
}
.layout-right{
    flex: 1;
    min-width: 300px;
    background: green;
}
.top-search{
    height: 100px;
    width: 100%;
    background: yellow;
}
</style>