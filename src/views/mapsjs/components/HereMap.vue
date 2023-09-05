<template>
    <div class="here-map">
        <div ref="map" v-bind:style="{ width: width, height: height }"></div>
    </div>
</template>

<script>
  export default {
    name: "HereMap",
    data() {
      return {
        map: {},
        platform: {}
      }
    },
    props: {
      apikey: String,
      lat: String,
      lng: String,
      width: String,
      height: String
    },
    created() {
      this.platform = new H.service.Platform({
        "apikey": this.apikey
      });
    },
    mounted() {
      // var defaultLayers = this.platform.createDefaultLayers();
      let defaultLayers = this.platform.createDefaultLayers({
        lg: 'zh'
      });

      var mapContainer = this.$refs.map
      var pixelRatio = window.devicePixelRatio || 1;
      this.map = new H.Map(mapContainer, defaultLayers.vector.normal.map, {
        center: {lat:50, lng:5},
        zoom: 4,
        pixelRatio: window.devicePixelRatio || 1
      });

      // add a resize listener to make sure that the map occupies the whole container
      window.addEventListener('resize', () => this.map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
      var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));

// Create the default UI components
      var ui = H.ui.UI.createDefault(this.map, defaultLayers);
      this.addMarkersToMap(this.map);
      // this.switchMapLanguage(this.map, this.platform);

// Now use the map as required...
//       window.onload = function () {
//         moveMapToBerlin(this.map);
//       }
    },
    methods: {
      switchMapLanguage(map, platform) {
        // Create default layers
        let defaultLayers = platform.createDefaultLayers({
          lg: 'zh'
        });
        // Set the normal map variant of the vector map type
        map.setBaseLayer(defaultLayers.vector.normal.map);

        // Display default UI components on the map and change default
        // language to simplified Chinese.
        // Besides supported language codes you can also specify your custom translation
        // using H.ui.i18n.Localization.
        var ui = H.ui.UI.createDefault(map, defaultLayers, 'zh-CN');

        // Remove not needed settings control
        ui.removeControl('mapsettings');
      },
      addMarkersToMap(map) {
        var parisMarker = new H.map.Marker({lat:48.8567, lng:2.3508});
        map.addObject(parisMarker);

        var romeMarker = new H.map.Marker({lat:41.9, lng: 12.5});
        map.addObject(romeMarker);

        var berlinMarker = new H.map.Marker({lat:52.5166, lng:13.3833});
        map.addObject(berlinMarker);

        var madridMarker = new H.map.Marker({lat:40.4, lng: -3.6833});
        map.addObject(madridMarker);

        var londonMarker = new H.map.Marker({lat:51.5008, lng:-0.1224});
        map.addObject(londonMarker);
      }
    }
  }
</script>

<style scoped></style>
