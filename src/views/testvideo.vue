<template>
    <div>
        <video crossorigin="anonymous" mediatype="video" src="https://vd4.bdstatic.com/mda-kfhqtqzx15ym5s1y/hd/mda-kfhqtqzx15ym5s1y.mp4?v_from_s=hkapp-haokan-nanjing&auth_key=1633916646-0-0-1cd2ee88cad34f81f8cd15b679d0492d&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=" ref="videowewe" id="sdjdh"></video>
    </div>
    
</template>

<script>
  export default {
    name: "testvideo",
    data(){
      return{

      }
    },
    mounted(){
      console.log(this.$refs.videowewe)

    }
  }
</script>

<style scoped>

</style>