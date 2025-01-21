<template>
  <div>
    缓存组件
    <div @click="chuli">缓存开始</div>
    <com1 ref="com1"></com1>
    <com2 ref="com2"></com2>

    <div class="signature-page">
      <h2>手写强制推签名</h2>
      <Signature :width="800" :height="300" save-format="png" @save="handleSave" @clear="handleClear" @error="handleError" ref="signatureRef" />

      <!-- 预览签名 -->
      <div v-if="signatureImage" class="preview">
        <h3>签名预览232323</h3>
        <img :src="signatureImage" alt="签名" />
      </div>
    </div>
  </div>
</template>

<script>
import com1 from "./com1.vue";
import com2 from "./com2.vue";
import Signature from "./signature.vue";
export default {
  components: {
    com1,
    com2,
    Signature,
  },
  data() {
    return {
      signatureImage: "",
      payeeInfo:[{
        supplierName:'qqq'
      }]
    };
  },
  mounted() {
    console.log(eval(this.convertPath('payeeInfo.0.supplierName',{ safeAccess: true })))
  },
  methods: {
    convertPath(path, options = {}) {
      const {
        prefix = "this.", // 前缀
        useBrackets = false, // 是否总是使用方括号
        removeThis = false, // 是否移除 this
        safeAccess = false, // 是否使用可选链操作符
      } = options;

      if (!path) return prefix;

      // 移除首尾的点和空格
      path = path.trim().replace(/^\.+|\.+$/g, "");

      // 转换路径
      const converted = path
        .split(".")
        .map((key, index) => {
          const isNumber = /^\d+$/.test(key);

          // 处理数组索引
          if (isNumber) {
            return `[${key}]`;
          }

          // 处理对象属性
          if (useBrackets) {
            return `[${JSON.stringify(key)}]`;
          }

          return index === 0 ? key : `.${key}`;
        })
        .join("");

      // 添加前缀
      let result = removeThis ? converted : prefix + converted;

      // 添加可选链
      if (safeAccess) {
        result = result.replace(/\./g, "?.");
        result = result.replace(/\[/g, "?.[");
      }

      return result;
    },
    handleSave(imageData) {
      this.signatureImage = imageData;
      // 这里可以将 imageData 发送到服务器
    },

    handleClear() {
      this.signatureImage = "";
    },

    handleError(error) {
      alert(error);
    },
    chuli() {
      // console.log(this.$refs.com1);
      // this.$set(this.$refs.com1.$data, "form", { name: "999" });
      // this.$refs.com1.$forceUpdate();
    },
  },
};
</script>

<style></style>
