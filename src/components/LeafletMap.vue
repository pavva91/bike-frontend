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

function readXml(xmlFile) {
  let xmlhttp = new XMLHttpRequest()
  xmlhttp.open('GET', xmlFile, false)
  if (xmlhttp.overrideMimeType) {
    xmlhttp.overrideMimeType('text/xml')
  }
  xmlhttp.send()
  return xmlhttp.responseXML
}

function getWayPointsArr(xml) {
  const wayPoints = xml.getElementsByTagName('wpt')
  let wayPointsArray = Array.prototype.slice.call(wayPoints, 0)
  return wayPointsArray
}

function getTrackPointsArr(xml) {
  const trackPoints = xml.getElementsByTagName('trkpt')
  let trackPointsArr = Array.prototype.slice.call(trackPoints, 0)
  return trackPointsArr
}

const createGpxMap = () => {
  const standardIcon = L.icon({
    iconUrl: '/marker-icon.png',
    className: 'start',
    // shadowUrl: 'leaf-shadow.png',

    // iconSize: [38, 95], // size of the icon
    // shadowSize: [50, 64], // size of the shadow
    iconAnchor: [12, 40], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62], // the same for the shadow
    // popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  })

  const endIconStrava = L.divIcon({
    html: '<div></div>',
    className: 'map-marker-sprite end-icon',
    iconSize: [24, 24],
  })

  const startIconStrava = L.divIcon({
    html: '<div></div>',
    className: 'map-marker-sprite start-icon',
    iconSize: [24, 24],
  })

  const wptIconStrava = L.divIcon({
    html: '<div></div>',
    className: 'map-marker-sprite wpt-icon',
    iconSize: [24, 24],
    iconAnchor: [15, 20],
  })

  mapContainer = map('mapContainer', {
    scrollWheelZoom: false,
    dragging: false,
  })

  const urlGpx = '/gpx/' + props.type + '/' + props.type + props.id + '.gpx'
  const xml = readXml(urlGpx)
  if (!xml) {
    return
  }
  const trkPoints = getTrackPointsArr(xml)
  const startPoint = trkPoints[0]
  const finishPoint = trkPoints[trkPoints.length - 1]

  const wptPoints = getWayPointsArr(xml)
  wptPoints.forEach((wpt) => {
    L.marker([wpt.getAttribute('lat'), wpt.getAttribute('lon')], {
      icon: wptIconStrava,
    }).addTo(mapContainer)
  })

  // NOTE: this works
  // L.marker([startPoint.getAttribute('lat'), startPoint.getAttribute('lon')], {
  //   icon: standardIcon,
  // }).addTo(mapContainer)
  L.marker([startPoint.getAttribute('lat'), startPoint.getAttribute('lon')], {
    icon: startIconStrava,
  }).addTo(mapContainer)
  L.marker([finishPoint.getAttribute('lat'), finishPoint.getAttribute('lon')], {
    icon: endIconStrava,
  }).addTo(mapContainer)

  tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
  }).addTo(mapContainer)

  // NOTE: ../../public/gpx/road/road1.gpx
  const options = {
    async: true,
    polyline_options: { color: 'red' },
    markers: {
      // NOTE: workaround, leaflet-gpx will break with ''
      startIcon: 's',
      endIcon: 's',
    },
  }

  const gpx = new L.GPX(urlGpx, options)
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

.map-marker-sprite {
  /* NOTE: original strava file url */
  /* background-image: url('https://d3nn82uaxijpm6.cloudfront.net/assets/sprites/sprites-map-9edbefa3bd42dbf847ae5421c0fa9b65ec40ea91ec53f5d42555a61f9af64fc6.png'); */
  background-image: url('/img/sprites-map-strava.png');
}

.map-marker-sprite.end-icon {
  background-position: -24px -144px;
  z-index: 18 !important;
}

.map-marker-sprite.start-icon {
  background-position: 0 -144px;
  z-index: 23 !important;
}

.map-marker-sprite.wpt-icon {
  background-position: -212px -144px;
  z-index: 13 !important;
}

.leaflet-marker-pane img {
  display: none;
}

.leaflet-shadow-pane img {
  display: none;
}
</style>
