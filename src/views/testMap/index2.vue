<template>
    <div>
        <div @click="clickChange">点击切换</div>
        <div id="map"></div>
        <!--<div id="myChart"></div>-->
    </div>


</template>

<script>
  import {Scene, LineLayer, PointLayer, PolygonLayer, Popup} from "@antv/l7";
  import {Mapbox} from "@antv/l7-maps";

  export default {
    name: "index",
    data(){
      return{
        scene:null
      }
    },
    mounted() {
      this.drawMap()

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
                    "background-color": "#2b2b3a",
                  },
                },
              ],
            },
            center: [3.438, 40.16797],
            zoom: 1,
          }),
        });
        return
      },
      drawMap(step) {
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
                    "background-color": "#2b2b3a",
                  },
                },
              ],
            },
            center: [3.438, 40.16797],
            zoom: 1,
          }),
        });
        that.scene = scene
        scene.setBgColor("#fff");
        scene.on("loaded", () => {
          scene.addImage(
              "plane",
              "https://gw.alipayobjects.com/zos/bmw-prod/96327aa6-7fc5-4b5b-b1d8-65771e05afd8.svg"
          );
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
            console.log('word', world)
            let wordCopyData = {
              type: "FeatureCollection",
              features: [
                {
                  "type": "Feature",
                  "properties": {"name": "阿尔及利亚", "name_en": "ALGERIA", "id": "DZA"},
                  "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[-2.20625, 35.090973], [-2.008472, 35.076637], [-1.764084, 35.131248], [-1.555639, 35.270916], [-1.382, 35.313473], [-1.2585, 35.399387], [-1.180056, 35.588833], [-0.946056, 35.729752], [-0.828389, 35.773529], [-0.640667, 35.717335], [-0.511833, 35.788887], [-0.47975, 35.876026], [-0.337555, 35.912304], [-0.277528, 35.826862], [-0.107945, 35.794918], [0.036417, 35.875221], [0.127444, 36.044807], [0.339333, 36.198166], [0.634111, 36.311501], [0.901278, 36.393696], [0.939583, 36.449806], [1.194722, 36.517666], [1.306028, 36.518028], [1.352917, 36.555637], [1.511694, 36.532333], [1.649611, 36.559082], [2.102194, 36.584667], [2.321583, 36.64164], [2.423917, 36.597916], [2.612056, 36.605778], [2.818611, 36.711971], [2.904889, 36.80611], [3.024417, 36.81514], [3.143028, 36.740917], [3.222917, 36.774723], [3.490306, 36.774113], [3.634639, 36.827751], [3.716972, 36.885471], [3.879611, 36.923443], [3.938889, 36.899944], [4.107777, 36.895363], [4.291444, 36.912083], [4.403583, 36.896252], [4.72125, 36.887417], [4.921333, 36.854168], [5.037305, 36.791805], [5.102416, 36.701946], [5.268972, 36.642666], [5.464556, 36.669418], [5.575528, 36.773888], [5.738722, 36.834778], [5.797945, 36.814529], [5.999389, 36.847057], [6.21325, 36.913193], [6.261917, 37.025139], [6.335555, 37.070557], [6.487944, 37.090527], [6.572, 36.987999], [6.714667, 36.952526], [6.845806, 36.961029], [6.917278, 36.886082], [7.182833, 36.931721], [7.277, 37.072304], [7.506805, 37.044861], [7.624833, 36.969166], [7.75525, 36.961529], [7.764139, 36.882416], [7.852194, 36.846554], [8.03525, 36.873833], [8.236194, 36.955528], [8.283861, 36.920776], [8.50775, 36.909222], [8.641972, 36.946919], [8.579833, 36.780613], [8.478417, 36.776638], [8.483916, 36.697861], [8.313472, 36.551723], [8.154944, 36.499443], [8.209222, 36.450748], [8.409278, 36.424835], [8.390001, 36.309361], [8.345, 36.276222], [8.339167, 36.139637], [8.297305, 36.029945], [8.301083, 35.939919], [8.255555, 35.76289], [8.359667, 35.651054], [8.364278, 35.5135], [8.318028, 35.360138], [8.324139, 35.291222], [8.4445, 35.214943], [8.351416, 35.091473], [8.262278, 34.885918], [8.290417, 34.758915], [8.251445, 34.613693], [7.918944, 34.418751], [7.848166, 34.407749], [7.798306, 34.21236], [7.636222, 34.196335], [7.610917, 34.10947], [7.540167, 34.045971], [7.533555, 33.793335], [7.580889, 33.760807], [7.601, 33.629471], [7.743639, 33.427776], [7.738444, 33.251362], [7.813667, 33.172916], [7.896444, 33.176193], [8.052834, 33.098499], [8.115444, 33.099361], [8.326445, 32.809334], [8.326389, 32.670723], [8.3535, 32.515915], [9.071861, 32.096722], [9.12925, 32.0], [9.137111, 31.876444], [9.3455, 31.110666], [9.575334, 30.240418], [9.395223, 30.171223], [9.418528, 30.055389], [9.549049, 29.914858], [9.792983, 29.430895], [9.877125, 29.044134], [9.874373, 28.659489], [9.835972, 28.28989], [9.869641, 28.144865], [9.961322, 27.888329], [9.923803, 27.700525], [9.850559, 27.499243], [9.806441, 27.47028], [9.773976, 27.263884], [9.829903, 27.142771], [9.841373, 26.984644], [9.934465, 26.842993], [9.908139, 26.726736], [9.927657, 26.642883], [9.876212, 26.520399], [9.520966, 26.374914], [9.387854, 26.183851], [9.774089, 25.689426], [10.041826, 25.327713], [10.040716, 24.877232], [10.185399, 24.793644], [10.239261, 24.611713], [10.396629, 24.511049], [10.493262, 24.488976], [10.694419, 24.567823], [11.012614, 24.460444], [11.124939, 24.400797], [11.434692, 24.190147], [11.606182, 24.249044], [11.708302, 24.0], [11.979548, 23.525026], [11.432016, 23.214809], [10.577701, 22.716612], [10.051885, 22.407286], [9.575288, 22.129536], [9.071902, 21.827499], [8.601714, 21.544872], [8.002944, 21.181105], [7.445678, 20.842468], [7.160677, 20.619377], [6.502543, 20.046991], [5.817081, 19.43771], [4.824817, 19.252298], [4.242888, 19.136717], [3.333774, 18.960028], [3.121174, 19.119499], [3.108515, 19.179968], [3.197989, 19.280701], [3.272079, 19.409563], [3.212573, 19.565798], [3.228661, 19.825912], [3.180333, 19.83275], [3.002442, 19.936764], [2.811467, 19.970337], [2.705234, 20.004688], [2.578319, 20.004887], [2.399215, 20.071934], [2.33842, 20.183811], [2.253289, 20.264826], [2.186554, 20.291985], [2.095358, 20.212132], [2.045671, 20.256464], [1.927599, 20.238214], [1.876006, 20.298286], [1.803177, 20.296862], [1.671045, 20.410471], [1.653113, 20.552156], [1.592698, 20.600473], [1.371349, 20.665758], [1.305946, 20.744158], [1.176954, 20.733541], [1.158611, 20.792984], [1.184915, 20.903179], [1.187256, 21.046377], [1.166675, 21.118887], [0.411106, 21.584263], [-0.000443, 21.837215], [-0.027552, 21.917942], [-0.750254, 22.391735], [-1.134199, 22.642967], [-1.669253, 22.996471], [-2.156349, 23.310476], [-2.712557, 23.664427], [-3.315, 24.042326], [-3.96104, 24.445128], [-4.827675, 24.996595], [-5.408522, 25.36639], [-6.342108, 25.939329], [-7.0, 26.341364], [-7.894827, 26.85379], [-8.673868, 27.298073], [-8.670276, 27.662115], [-8.672027, 28.394119], [-8.669257, 28.719862], [-8.52137, 28.781076], [-8.213035, 29.01915], [-8.082245, 29.071899], [-7.864933, 29.213688], [-7.640523, 29.381409], [-7.475306, 29.378208], [-7.343539, 29.469461], [-7.171687, 29.614714], [-7.0, 29.644922], [-6.833464, 29.634644], [-6.694647, 29.58799], [-6.549977, 29.587625], [-6.448217, 29.700102], [-6.300618, 29.717508], [-6.072353, 29.711987], [-5.919113, 29.790298], [-5.659026, 29.818058], [-5.457848, 29.895369], [-5.130539, 29.999353], [-5.002056, 30.166334], [-4.83825, 30.628834], [-4.604417, 30.697666], [-4.40575, 30.705833], [-4.214361, 30.743833], [-4.067222, 30.844833], [-3.885167, 30.896166], [-3.804722, 30.873249], [-3.654139, 30.922945], [-3.575695, 30.915222], [-3.546472, 30.970583], [-3.578445, 31.046139], [-3.772972, 31.117666], [-3.807278, 31.222], [-3.766667, 31.270277], [-3.763528, 31.361584], [-3.651833, 31.382278], [-3.66, 31.595306], [-3.639667, 31.627083], [-3.141889, 31.715195], [-2.822972, 31.781944], [-2.847389, 31.88611], [-2.942722, 32.0], [-2.924278, 32.059807], [-2.843306, 32.113861], [-2.577306, 32.124363], [-2.456472, 32.161915], [-2.286083, 32.177471], [-1.957167, 32.139946], [-1.675028, 32.130859], [-1.545444, 32.147221], [-1.3635, 32.131111], [-1.267167, 32.097832], [-1.192445, 32.177555], [-1.255722, 32.243999], [-1.250028, 32.332333], [-1.184, 32.410583], [-1.066833, 32.455639], [-1.021222, 32.539806], [-1.379334, 32.739529], [-1.542222, 32.9575], [-1.487056, 32.978111], [-1.482722, 33.081638], [-1.569111, 33.14761], [-1.669278, 33.282307], [-1.661389, 33.386807], [-1.600528, 33.514137], [-1.602361, 33.621445], [-1.729445, 33.735333], [-1.676889, 33.776222], [-1.702778, 33.872917], [-1.648472, 34.108418], [-1.780722, 34.397278], [-1.69175, 34.497639], [-1.847195, 34.625473], [-1.746417, 34.754971], [-1.882778, 34.812195], [-2.033278, 34.932499], [-2.177111, 35.023056], [-2.20625, 35.090973]]]
                  }
                }
              ]
            }
            // console.log('dot', dot)
            // console.log('flyline', flyline)
            let dotData = eval(dot);

            dotData = dotData.slice(0, 20);
            // @ts-ignore
            // console.log("dotData", dotData);
            let flylineO = eval(flyline);
            flylineO = flylineO.slice(0, 1);

            const flydata = flylineO.map((item) => {
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
            let useWorld = step === 2? wordCopyData : world
            const worldLine = new LineLayer()
                .source(useWorld)
                .color("red")
                .size(0.5)
                .style({
                  // opacity: 0.4,
                  // background: "#2b2b3a",

                });
            const worldPolygon = new PolygonLayer()
                .source(useWorld)
                .shape("fill")
                .color('id', (id) => {
                  // 通过回调函数
                  return that.RandomColor()
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
            console.log('dotData', dotData)
            const dotPoint = new PointLayer({bland: "additive",zIndex: 1000,pickingBuffer:100})
                .source(dotData, {
                  parser: {
                    type: "json",
                    x: "lng",
                    y: "lat",
                  },
                })
                // .shape('name', 'text')

                .shape("circle")
                .color("#000")
                .animate(true)
                .size(40)
                .style({
                  // zIndex:1000
                  // opacity: 1.0,
                });
            // dotPoint.setIndex(999)
            dotPoint.select({
              color: 'red',
            })
            dotPoint.on('click', (ev) => {
              console.log(ev)
              var html = '<p id="myChart">' + 'ppppp' + '</p>';
              const popup = new Popup().setLnglat(ev.feature.coordinates).setHTML(html);
              scene.addPopup(popup);
              that.drawLine();
            });
            // const dotPoint = new PointLayer({bland: "additive"})
            //     .source(dotData, {
            //       parser: {
            //         type: "json",
            //         x: "lng",
            //         y: "lat",
            //       },
            //     })
            //     .shape("circle")
            //     .color("rgb(22,119,255)")
            //     .animate(true)
            //     .size(40)
            //     .style({
            //       opacity: 1.0,
            //     });
            const flyLine = new LineLayer({blend: "additive", zIndex: 2})
                .source(flydata, {
                  parser: {
                    type: "json",
                    coordinates: "coord",
                  },
                })
                .color("rgb(22,119,255)")
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

            const flyLine2 = new LineLayer()
                .source(flydata, {
                  parser: {
                    type: "json",
                    coordinates: "coord",
                  },
                })
                .color("rgb(22,119,255)")
                .shape("arc3d")
                .size(1)
                .style({
                  lineType: "dash",
                  dashArray: [5, 5],
                  opacity: 0.5,
                });
            // scene.addLayer(worldLine);
            scene.addLayer(worldPolygon);
            scene.addLayer(dotPoint);
            // scene.addLayer(flyLine2);
            // scene.addLayer(flyLine);

            // console.log('getLayers', scene.getLayers())
          });
        })

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
    .mapboxgl-map{
        top:60px!important
    }

</style>
