<template>
  <div>
    <div class="aa">
      2323
      2323
      2323
      2323
      2323
    </div>
    <aa></aa>
  </div>
</template>

<script>
import aa from './aa.vue'
export default {
  components:{
    aa
  }

}
</script>

<style>
.aa{
  width: 10px;
  overflow: hidden;
  background: red;
  height: 0;
  transition: all .3s;
  height: calc-size(auto);
}

</style>