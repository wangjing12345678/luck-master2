<template>
  <div class="selfComponent">
    <br />
    <sonCom :items="'sonCom'">
      <!-- vue2.6 以前写法 废弃了 但是没有移除掉 -->
      <template slot="somCom" slot-scope="scope">
        {{ scope.items }}
      </template>
    </sonCom>
    <sonCom2>
      <!-- vue2.6 以后写法 -->
      <template v-slot:sonCom2="aaa">
        {{ aaa.items }}
      </template>
    </sonCom2>
    <FlexiableSlot :level="1" :content="'kkkk'">
      【一级标题】level值为1，表示渲染的是h1标签
      <template v-slot:header="props">
        <h1>{{ props.text }}</h1>
      </template>
    </FlexiableSlot>
    <!-- <FlexiableSlot :level="2"  :content="'hhh'">
            【二级标题】level值为2，表示渲染的是h2标签
        </FlexiableSlot> -->
  </div>
</template>
<script>
import sonCom from "./components/sonCom.vue";
import sonCom2 from "./components/sonCom2.vue";
import FlexiableSlot from "./components/testcom.vue";

export default {
  components: {
    FlexiableSlot,
    sonCom,
    sonCom2,
  },
};
</script>
