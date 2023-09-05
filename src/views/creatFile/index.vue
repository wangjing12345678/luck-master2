<template>
  <div>
    <el-button @click="createTemplate">生成vue文件</el-button>
  </div>
</template>

<script>
import { saveAs } from "file-saver";
import beautify from "js-beautify";
export default {
  methods: {
    createTemplate() {
      
      var blob = new Blob(
        [
          `
      <template> 
        <div> <el-button @click="createTemplate">生成vue文件</el-button> </div> 
      </template> 
      <script> import { saveAs } from "file-saver"; 
        export default { 
          methods: { 
            createTemplate() { 
              var blob = new Blob([], { type: "text/plain;charset=utf-8" }); 
              saveAs(blob, "hello world.vue"); 
            }, 
          }, 
        }; 
      </\script> 
      <style></\style>`,
        ],
        { type: "text/plain;charset=utf-8" }
      );
      saveAs(blob, "hello world.vue");
    },
  },
};
</script>

<style></style>
