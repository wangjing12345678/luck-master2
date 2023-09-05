<template>
  <grid-layout
    :layout.sync="layoutData"
    :col-num="12" :row-height="30"
    :is-draggable="home_drag" :is-resizable="home_drag" :is-mirrored="false"
    :vertical-compact="vCompact" :margin="[10, 10]" :use-css-transforms="true"
    @layout-created="layoutCreatedEvent" @layout-before-mount="layoutBeforeMountEvent"
    @layout-mounted="layoutMountedEvent" @layout-ready="layoutReadyEvent"
    @layout-updated="layoutUpdatedEvent">
    <grid-item class="grid-items"
               v-for="item in layoutData"
               @resized="resizedEvent(item)"
               :minW="layoutRange.minW" :minH="layoutRange.minH"
               :dragIgnoreFrom="'i,a, button'"
               @container-resized="containerResizedEvent"
               :x="item.x" :y="item.y"
               :w="item.w" :h="item.h"
               :i="item.i" :key="item.i">
        <!--   根据type决定组件展示类型以及数据   -->
      <div></div>
    </grid-item>
  </grid-layout>
</template>

<script>
//  定义块最小高宽
const layoutRange = {
  minW: 4,
  minH: 10
};
export default {
name: "test",
  data() {
    return {
      layoutRange,
      layoutData: [
        {
          "x": 0, // 所在位置x轴
          "y": 10, // 所在位置y轴
          "w": 4, // 宽度占比
          "h": 10, //高度占比
          "i": "4befd9a5d021441c91e49bc82900f457WEB", // 随机数
          type: '', // 类型 轮播、图片、列表等等
          data: [] // 数据
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>
