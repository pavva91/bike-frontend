<template>
  <div id="mapContainer"></div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import { map, tileLayer, marker } from 'leaflet'
import * as L from 'leaflet'
import 'leaflet-gpx'
import { onMounted, onBeforeUnmount, onBeforeUpdate, computed } from 'vue'
import { filename } from 'pathe/utils'

export default {
  name: 'LeafletMap',
  props: {
    type: String,
    id: String,
  },
  setup(props) {
    let mapContainer = null

    onBeforeUpdate(() => {
      mapContainer.remove()

      mapContainer = map('mapContainer', {
        scrollWheelZoom: false,
      })

      // mapContainer = map('mapContainer', {
      //   scrollWheelZoom: false
      // }
      // ).setView([51.505, -0.09], 13)

      // tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
      }).addTo(mapContainer)

      // NOTE: to add a marker on the map
      // marker([51.5, -0.09])
      //   .addTo(mapContainer)
      //   .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      //   .openPopup()

      // NOTE: URL to your GPX file or the GPX itself as a XML string.
      // const url = 'https://mpetazzoni.github.io/leaflet-gpx/demo.gpx'
      // const url = "../../public/gpx/Giro d'Italia 2024 Stage 12_ Martinsicuro - Fano.gpx"
      // const url = "/public/gpx/Giro d'Italia 2024 Stage 12_ Martinsicuro - Fano.gpx"
      // const url = "/public/gpx/road/road1.gpx"
      const url = '/gpx/' + props.type + '/' + props.type + props.id + '.gpx'
      // const url = '/public/gpx/' + props.type + '/' + gpxs[`${imageName}`]
      const options = {
        async: true,
        polyline_options: { color: 'red' },
      }

      const gpx = new L.GPX(url, options)
        .on('loaded', (e) => {
          mapContainer.fitBounds(e.target.getBounds())
        })
        .addTo(mapContainer)
    })

    onMounted(() => {
      mapContainer = map('mapContainer', {
        scrollWheelZoom: false,
      })

      // mapContainer = map('mapContainer', {
      //   scrollWheelZoom: false
      // }
      // ).setView([51.505, -0.09], 13)

      // tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
      }).addTo(mapContainer)

      // NOTE: to add a marker on the map
      // marker([51.5, -0.09])
      //   .addTo(mapContainer)
      //   .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      //   .openPopup()

      // NOTE: URL to your GPX file or the GPX itself as a XML string.
      // const url = 'https://mpetazzoni.github.io/leaflet-gpx/demo.gpx'
      // const url = "../../public/gpx/Giro d'Italia 2024 Stage 12_ Martinsicuro - Fano.gpx"
      // const url = "/public/gpx/Giro d'Italia 2024 Stage 12_ Martinsicuro - Fano.gpx"
      // const url = "/public/gpx/road/road1.gpx"
      const url = '/public/gpx/' + props.type + '/' + props.type + props.id + '.gpx'
      // const url = '/public/gpx/' + props.type + '/' + gpxs[`${imageName}`]
      const options = {
        async: true,
        polyline_options: { color: 'red' },
      }

      const gpx = new L.GPX(url, options)
        .on('loaded', (e) => {
          mapContainer.fitBounds(e.target.getBounds())
        })
        .addTo(mapContainer)
    })

    onBeforeUnmount(() => {
      mapContainer.remove()
    })
  },
}
</script>

<style scoped>
#mapContainer {
  /* width: 40vw; */
  /* height: 40vh; */
  width: 100%;
  height: 500px;
}
</style>
