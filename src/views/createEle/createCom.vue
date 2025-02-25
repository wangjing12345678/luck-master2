<template>
  <div>
    <div @click="clickCreateCom">点击</div>
    <div ref="container"></div>
    <testNewSet></testNewSet>
  </div>
</template>

<script>
import com1 from "./com1.vue";
import Vue from "vue";
import testNewSet from "./testNewSet.vue";
export default {
  components: {
    testNewSet,
  },
  data() {
    return {
      propsTitle: "9999",
      oriinstance: null,
    };
  },
  methods: {
    clickCreateCom() {
      if (!this.$refs.newCom) {
        const ComponentClass = Vue.extend(com1);

        const instance = new ComponentClass({
          propsData: {
            title: this.propsTitle,
            /* props data */
          },
          customOption: "000",
        });

        instance.$mount();
        instance.$on("aaa", function (msg) {
          console.log("ooo");
        });
        instance.$data.ooo = "22";

        this.$refs.container.appendChild(instance.$el);
        this.$nextTick(() => {
          this.$refs.newCom = instance.$el;
        });
        this.oriinstance = instance;
      } else {
        console.log(this.oriinstance.$options);
        this.oriinstance.$props.title = new Date().getTime();
      }
    },
    
  },
};
</script>

<style></style>
