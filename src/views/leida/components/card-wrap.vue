<template>
  <div class="wrap">
    <div @click="kkk">改变数字</div>
    <card v-for="(i, index) in moneyArr" :key="index" :num="i"></card>
  </div>
</template>

<script>
import card from "./card.vue";
import { money } from "@/utils/utils.js";
export default {
  data() {
    return {
      money: 99999,
    };
  },
  computed: {
    moneyArr() {
    //   console.log(money(this.money));
      return String(money(this.money)).split("");
    },
  },
  components: {
    card,
  },
  methods: {
    kkk() {
      this.money += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 10px;
  left: 200px;
  height: 160px;
}
</style>
