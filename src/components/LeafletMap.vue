<template>
  <div id="mapContainer"></div>
</template>

<script setup>
import 'leaflet/dist/leaflet.css'
import { map, tileLayer, marker } from 'leaflet'
import * as L from 'leaflet'
import 'leaflet-gpx'
import { onMounted, onBeforeUpdate, onBeforeUnmount, computed } from 'vue'
import { filename } from 'pathe/utils'

const props = defineProps({
  type: {
    required: true,
  },
  id: {
    required: true,
  },
})

onBeforeUpdate(() => {
  mapContainer.remove()
  createGpxMap()
})

onMounted(() => {
  createGpxMap()
})

let mapContainer = null

const createGpxMap = () => {
  mapContainer = map('mapContainer', {
    scrollWheelZoom: false,
    dragging: false,
  })

  // mapContainer = map('mapContainer', {
  //   scrollWheelZoom: false,
  // }).setView([51.505, -0.09], 13)

  tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
  }).addTo(mapContainer)

  // marker([51.5, -0.09])
  //   .addTo(mapContainer)
  //   .bindPopup('A pretty CSS popup.<br> Easily customizable.')
  //   .openPopup()

  // NOTE: ../../public/gpx/road/road1.gpx
  const url = '/gpx/' + props.type + '/' + props.type + props.id + '.gpx'
  const options = {
    async: true,
    polyline_options: { color: 'red' },
  }

  const gpx = new L.GPX(url, options)
    .on('loaded', (e) => {
      mapContainer.fitBounds(e.target.getBounds())
    })
    .addTo(mapContainer)
}
</script>

<style>
#mapContainer {
  /* width: 40vw; */
  /* height: 40vh; */
  width: 100%;
  height: 500px;
}

.leaflet-attribution-flag {
  display: none !important;
}

.leaflet-top {
  z-index: inherit;
}
</style>
