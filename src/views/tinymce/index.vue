<template>
  <div class="editMember">
    <el-button @click="consoeljkk">输出</el-button>
    <el-button @click="insett">插入</el-button>
    <Tinymce :height="200" v-model="tiny.value" ref="Tinymce" @getOO="getOO"></Tinymce>
  </div>
</template>

<script>
import Tinymce from "./tinymceCom.vue";
export default {
  components: {
    Tinymce,
  },
  data() {
    return {
      tiny: {
        value: undefined,
      },
      tinymce: null,
    };
  },
  methods: {
    getOO(obj) {
      this.tinymce = obj
    },
    consoeljkk() {
      console.log(this.tiny);
    },
    insett() {
      this.tinymce.activeEditor.execCommand("mceInsertContent", false, '<input type="button" value="电话">');
    },
    // 保存富文本内容-保存字符串
    add() {
      const params = `this.tiny?.value`;
    },
    edit() {
      // 接口回显保存html
      // this.tiny.value = res.data|| ''
    },
  },
};
</script>
