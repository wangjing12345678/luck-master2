<template>
    <div>
        <div @click="clickChange">点击切换</div>
        <div id="map"></div>

        <!--<div id="myChart"></div>-->
    </div>


</template>

<script>
  import {Scene, LineLayer, PointLayer, PolygonLayer, Popup, MarkerLayer , Marker} from "@antv/l7";
  import {Mapbox} from "@antv/l7-maps";

  export default {
    name: "index",
    data(){
      return{
        scene:null,
        wordData :[],
        dotData:[],
        flylineData:[],

        worldLine:null,
        worldPolygon:null,
        dotPoint:null,
        flyLine:null,
        markerLayer:null,
        markerLayerMessage:null,
        worldPolygonLine:null




      }
    },
    mounted() {
      this.getAllData().then(res => {
        this.scene = this.createMap()
        this.scene.on("loaded", () => {
          this.scene.setBgColor("#e0e5f3");
          this.scene.addImage(
              "plane",
              "https://gw.alipayobjects.com/zos/bmw-prod/96327aa6-7fc5-4b5b-b1d8-65771e05afd8.svg"
          );
          this.drawWorld(this.wordData)
          this.drawPolygon(this.wordData)
          // this.drawPoint(this.dotData)
          // this.pointClick()
          console.log(this.dotData)
          this.drawMakerLayer(this.dotData)
          this.drawPolygonLine(this.wordData)
          // this.drawMessageMaker(this.dotData)
          this.drawFlyLine(this.flylineData)
          this.addLayer()
        })
      })

    },
    methods: {
      // 地图板块颜色
      RandomColor() {
        const r = Math.round(Math.random() * 255);
        const g = Math.round(Math.random() * 255);
        const b = Math.round(Math.random() * 255);

        const a = ((Math.random() * 5 + 5) / 10).toFixed(2)
        //随机颜色返回的是一个0.5到1 的两位小数;
        const color = `rgba(${r},${g},${b},${a})`

        // console.log(color)
        return color
      },
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: {text: '在Vue中使用echarts'},
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      },
      // 生成地图
      createMap(){
        let that = this
        const scene = new Scene({
          id: "map",
          logoVisible: false,
          map: new Mapbox({
            pitch: 0,
            style: {
              version: 8,
              sources: {},
              layers: [
                {
                  id: "background",
                  type: "background",
                  paint: {
                    "background-color": "#fff",
                  },
                },
              ],
            },
            center: [3.438, 40.16797],
            zoom: 1,
          }),
        });
        return scene
      },
      // 获取地图数据 描点 航线数据
      getAllData(){
        let that = this
        return new Promise(((resolve, reject) => {
          Promise.all([
            fetch(
                "https://gw.alipayobjects.com/os/bmw-prod/2960e1fc-b543-480f-a65e-d14c229dd777.json"
            ).then((d) => d.json()),
            fetch(
                "https://gw.alipayobjects.com/os/basement_prod/4472780b-fea1-4fc2-9e4b-3ca716933dc7.json"
            ).then((d) => d.text()),
            fetch(
                "https://gw.alipayobjects.com/os/basement_prod/a5ac7bce-181b-40d1-8a16-271356264ad8.json"
            ).then((d) => d.text()),
          ]).then(function onLoad([world, dot, flyline]) {
            that.wordData = world
            that.dotData = eval(dot).slice(0, 20)
            let flylineO = eval(flyline);
            flylineO = flylineO.slice(0, 1);
            that.flylineData = flylineO.map((item) => {
              // @ts-ignore
              const latlng1 = item.from.split(",").map((e) => {
                return e * 1;
              });
              // @ts-ignore
              const latlng2 = item.to.split(",").map((e) => {
                return e * 1;
              });
              return {coord: [latlng1, latlng2]};
            });
            resolve()
          })
        }))
      },
      drawWorld(data){
        this.worldLine = new LineLayer()
            .source(data)
            .color("#b9cae8")
            .size(0.5)
            .style({
              // opacity: 0.4,
              // background: "#2b2b3a",

            });
      },
      drawPolygon(data){
        let that = this
        this.worldPolygon = new PolygonLayer()
            .source(data)
            .shape("fill")
            .color('id', (id) => {
              // 通过回调函数
              // return that.RandomColor()
              return "#F3F6FF"
              // if (id.includes('U')) {
              //   return 'red';
              // }
              // return 'blue';
            })
            .size(0.5)
            .style({
              // opacity: 0.4,
              // opacityLinear: {
              //   enable: true,
              //   dir: "in", // in - out
              // },
            });
      },
      drawPolygonLine(data){
        let that = this
        this.worldPolygonLine = new PolygonLayer()
            .source(data)
            .shape("line")
            .color('id', (id) => {
              // 通过回调函数
              // return that.RandomColor()
              return "#b9cae8"
            })
            .size(0.5)
            .style({
            });
      },
      drawMakerLayer(data){
        this.markerLayer = new MarkerLayer();
        for (let i = 0; i < data.length; i++) {
          const el = document.createElement('div');
          el.className = 'labelclass';
          const son = document.createElement('div');
          son.className = 'sonClass';
          const innerHtml = ` <div class="cityName">${data[i].name}</div>
        <div class="cityDate">${'2018.03-2019.02'}</div>`
          son.innerHTML = innerHtml
          el.appendChild(son)
          const marker = new Marker({
            element: el
          }).setLnglat({ lng: data[i].lng, lat: data[i].lat });
          this.markerLayer.addMarker(marker);
        }
        this.scene.addMarkerLayer(this.markerLayer);
      },
      // drawMessageMaker(data){
      //   this.markerLayerMessage = new MarkerLayer();
      //   for (let i = 0; i < data.length; i++) {
      //     const el = document.createElement('label');
      //     el.className = 'messageDiv';
      //     el.textContent = data[i].name;
      //     const marker = new Marker({
      //       element: el
      //     }).setLnglat({ lng: data[i].lng, lat: data[i].lat });
      //     this.markerLayerMessage.addMarker(marker);
      //   }
      //   this.scene.addMarkerLayer(this.markerLayerMessage);
      // },
      drawPoint(data){
        this.dotPoint = new PointLayer({bland: "additive",zIndex: 1000,pickingBuffer:100})
            .source(data, {
              parser: {
                type: "json",
                x: "lng",
                y: "lat",
              },
            })
            // .shape('name', 'text')

            .shape("circle")
            .color("#ca1d22")
            .animate(true)
            .size(40)
            .style({
              // zIndex:1000
              // opacity: 1.0,
            });
        // dotPoint.setIndex(999)
        this.dotPoint.select({
          color: 'red',
        })
      },
      drawFlyLine(flydata){
       this.flyLine = new LineLayer({blend: "additive", zIndex: 2})
            .source(flydata, {
              parser: {
                type: "json",
                coordinates: "coord",
              },
            })
            .color("red")
            .texture("plane")
            .shape("arc3d")
            .size(25)
            .animate({
              duration: 1,
              interval: 0.5,
              trailLength: 0.05,
            })
            .style({
              textureBlend: "replace",
              lineTexture: true, // 开启线的贴图功能
              iconStep: 8, // 设置贴图纹理的间距
              opacity: 1,
            });
      },
      pointClick(){
        this.dotPoint.on('click', (ev) => {
          console.log(ev)
          var html = '<p id="myChart">' + 'ppppp' + '</p>';
          const popup = new Popup().setLnglat(ev.feature.coordinates).setHTML(html);
          this.scene.addPopup(popup);
          this.drawLine();
        });
      },
      addLayer(){

        this.scene.addLayer(this.worldLine);
        this.scene.addLayer(this.worldPolygon);
        this.scene.addLayer(this.worldPolygonLine);
        // this.scene.addLayer(this.dotPoint);
        this.scene.addLayer(this.flyLine);
      },



      clickChange(){
        this.scene.destroy();
        this.$nextTick(() => {
          this.drawMap(2)
        })

      }

    }
  }
</script>

<style>
    #myChart {

        width: 300px;
        height: 300px;
    }
    #map{
        position: relative;
        height: 500px;
    }
    /*.mapboxgl-map{*/
        /*top:60px!important*/
    /*}*/
    .labelclass{
        width: 30px;
        height: 30px;
        border-radius: 30px;
        background: rgba(239,228,238,1);
        border: 1px solid #e9c6cf;
        position: relative;
    }
    .labelclass:after{
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background: #ca1d22;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
    .messageDiv{
        width: 100px;
        height: 50px;
        background: #fff;
        border-radius: 10px;
        margin: 0 -300px -300px 0;
    }
    .sonClass{
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        left: 40px;
        width: 116px;
        height: 55px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.1);
        border-radius: 4px;
        padding: 8px;
    }
    .cityName{
        font-size: 14px;
        color: #333333;
        letter-spacing: 0;
        font-weight: 500;
        margin-bottom: 4px;
    }
    .cityDate{
        font-size: 12px;
        color: #666666;
        letter-spacing: 0;
        font-weight: 400;
    }


</style>
