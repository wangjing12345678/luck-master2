<template>
  <div>
    <div ref="chartColumn" style="width:100%; height:400px;"></div>
    <button @click="changeOption">点击改变内容</button>
  </div>
</template>

<script>
let echarts = require("echarts");
import { usaJson } from "./utils";
export default {
  data() {
    return {
      dataArr: [
        { name: "Alabama", value: 4822023 },
        { name: "Alaska", value: 731449 },
        { name: "Arizona", value: 6553255 },
        { name: "Arkansas", value: 2949131 },
        { name: "California", value: 38041430 },
        { name: "Colorado", value: 5187582 },
        { name: "Connecticut", value: 3590347 },
        { name: "Delaware", value: 917092 },
        { name: "District of Columbia", value: 632323 },
        { name: "Florida", value: 19317568 },
        { name: "Georgia", value: 9919945 },
        { name: "Hawaii", value: 1392313 },
        { name: "Idaho", value: 1595728 },
        { name: "Illinois", value: 12875255 },
        { name: "Indiana", value: 6537334 },
        { name: "Iowa", value: 3074186 },
        { name: "Kansas", value: 2885905 },
        { name: "Kentucky", value: 4380415 },
        { name: "Louisiana", value: 4601893 },
        { name: "Maine", value: 1329192 },
        { name: "Maryland", value: 5884563 },
        { name: "Massachusetts", value: 6646144 },
        { name: "Michigan", value: 9883360 },
        { name: "Minnesota", value: 5379139 },
        { name: "Mississippi", value: 2984926 },
        { name: "Missouri", value: 6021988 },
        { name: "Montana", value: 1005141 },
        { name: "Nebraska", value: 1855525 },
        { name: "Nevada", value: 2758931 },
        { name: "New Hampshire", value: 1320718 },
        { name: "New Jersey", value: 8864590 },
        { name: "New Mexico", value: 2085538 },
        { name: "New York", value: 19570261 },
        { name: "North Carolina", value: 9752073 },
        { name: "North Dakota", value: 699628 },
        { name: "Ohio", value: 11544225 },
        { name: "Oklahoma", value: 3814820 },
        { name: "Oregon", value: 3899353 },
        { name: "Pennsylvania", value: 12763536 },
        { name: "Rhode Island", value: 1050292 },
        { name: "South Carolina", value: 4723723 },
        { name: "South Dakota", value: 833354 },
        { name: "Tennessee", value: 6456243 },
        { name: "Texas", value: 26059203 },
        { name: "Utah", value: 2855287 },
        { name: "Vermont", value: 626011 },
        { name: "Virginia", value: 8185867 },
        { name: "Washington", value: 6897012 },
        { name: "West Virginia", value: 1855413 },
        { name: "Wisconsin", value: 5726398 },
        { name: "Wyoming", value: 576412 },
        { name: "Puerto Rico", value: 3667084 },
      ],
      mapOption: {},
      barOption: {},
      currentOption: "bar",

      chartColumn: null,
      option: {
        title: {
          text: "普通图表",
        },
        legend: {
          orient: "vertical",
          bottom: 10,
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
      data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 20, 36, 10, 10, 20, 5, 20, 36, 10],
    };
  },
  methods: {
    changeOption() {
      this.currentOption = this.currentOption == "map" ? "bar" : "map";
      if (this.currentOption == "map") {
        this.chartColumn.setOption(this.mapOption);
      } else {
        this.chartColumn.setOption(this.barOption);
      }
    },
    initChart() {
      this.chartColumn = echarts.init(this.$refs.chartColumn);
      //   this.chartColumn.setOption(this.mapOption);
    },
  },
  mounted: function() {
    echarts.registerMap("USA", usaJson, {
      Alaska: {
        // 把阿拉斯加移到美国主大陆左下方
        left: -131,
        top: 25,
        width: 15,
      },
      Hawaii: {
        left: -110,
        top: 28,
        width: 5,
      },
      "Puerto Rico": {
        // 波多黎各
        left: -76,
        top: 26,
        width: 2,
      },
    });
    this.initChart();

    this.mapOption = {
      visualMap: {
        left: "right",
        min: 500000,
        max: 38000000,
        inRange: {
          // prettier-ignore
          color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        },
        text: ["High", "Low"],
        calculable: true,
      },
      series: [
        {
          id: "population",
          type: "map",
          roam: true,
          map: "USA",
          animationDurationUpdate: 1000,
          universalTransition: true,
          data: this.dataArr,
        },
      ],
    };
    this.barOption = {
      xAxis: {
        type: "value",
      },
      yAxis: {
        type: "category",
        axisLabel: {
          rotate: 30,
        },
        data: this.dataArr.map(function(item) {
          return item.name;
        }),
      },
      animationDurationUpdate: 1000,
      series: {
        type: "bar",
        id: "population",
        data: this.dataArr.map(function(item) {
          return item.value;
        }),
        universalTransition: true,
      },
    };
    // let currentOption = this.mapOption;
    // this.chartColumn.setOption(this.mapOption);
    // setInterval(()=> {
    //   currentOption = currentOption === this.mapOption ? this.barOption : this.mapOption;
    //   this.chartColumn.setOption(currentOption, true);
    // }, 2000);
    this.changeOption();
  },
  created() {
    this.dataArr.sort(function(a, b) {
      return a.value - b.value;
    });
  },
};
</script>
