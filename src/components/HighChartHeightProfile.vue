<template>
  <div id="highchart-container" style="width: 100%; height: 400px"></div>
</template>

<script setup>
import { onMounted, onBeforeUpdate } from 'vue'
// import { Highcharts } from 'highcharts'
import * as Highcharts from 'highcharts'

const props = defineProps({
  type: {
    required: true,
  },
  id: {
    required: true,
  },
})

onBeforeUpdate(() => {
  // mapContainer.remove()
  createHeightChart()
})

onMounted(() => {
  createHeightChart()
})

/**
 * Utility function to get the distance between two points
 * http://stackoverflow.com/questions/27928/how-do-i-calculate-distance-between-two-latitude-longitude-points
 */
function getDistance(pt1, pt2) {
  const toRad = Math.PI / 180
  const R = 6371 // Radius of the earth in km
  const dLat = (pt2.lat - pt1.lat) * toRad // Javascript functions in
  // radians
  const dLon = (pt2.lon - pt1.lon) * toRad
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(pt1.lat * toRad) * Math.cos(pt2.lat * toRad) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c // Distance in km

  return d
}

// 2. Optionally define data labels by the index of the track point
const dl = {
  2: {
    enabled: true,
    format: 'Start',
    rotation: 0,
    align: 'right',
    crop: false,
  },
  1031: {
    enabled: true,
    format: 'End of road',
    rotation: 45,
    align: 'right',
  },
  98: {
    enabled: true,
    format: 'Drinking station',
    rotation: 45,
    align: 'right',
  },
  1300: {
    enabled: true,
    format: 'Finish',
    rotation: 0,
    align: 'right',
  },
}

function readXml(xmlFile) {
  var xmlDoc
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.open('GET', xmlFile, false)
  if (xmlhttp.overrideMimeType) {
    xmlhttp.overrideMimeType('text/xml')
  }
  console.log('xmlhttp:', xmlhttp)
  xmlhttp.send()
  xmlDoc = xmlhttp.responseXML
  return xmlDoc
}

const createHeightChart = () => {
  let urlGpx = '/gpx/' + props.type + '/' + props.type + props.id + '.gpx'
  let xml = readXml(urlGpx)
  let data = []

  let lastPoint
  let totalDistance = 0
  let trackPoints = xml.getElementsByTagName('trkpt')

  // For this particular gpx, we want to reverse the points
  trackPoints = Array.prototype.slice.call(trackPoints, 0)

  // Iterate over the track points, get cumulative distance and elevation
  trackPoints.forEach((trkpt, i) => {
    const ele = parseInt(trkpt.getElementsByTagName('ele')[0].textContent, 10),
      lat = parseFloat(trkpt.getAttribute('lat')),
      lon = parseFloat(trkpt.getAttribute('lon')),
      point = {
        lat: lat,
        lon: lon,
      },
      distance = lastPoint ? getDistance(lastPoint, point) : 0

    totalDistance += distance

    /* console.log(
        'time', time,
        'elevation', ele,
        'lat', lat,
        'lon', lon,
        'distance', distance,
        'totalDistance', totalDistance
    );*/
    data.push({
      x: Math.round(totalDistance * 100) / 100,
      y: ele - 15,
      dataLabels: dl[i],
      marker: dl[i]
        ? {
            enabled: true,
            // fillColor: '`var(--vt-c-text-1)`',
            fillColor: 'white',
            lineWidth: 3,
            // lineColor: '`var(--vt-c-text-selected)`',
            lineColor: 'red',
          }
        : void 0,
    })

    lastPoint = point
  })
  const chartHeightProfile = Highcharts.chart('highchart-container', {
    chart: {
      // type: 'area',

      // NOTE: this works (why?)
      // backgroundColor: 'black'
      backgroundColor: getComputedStyle(document.documentElement).getPropertyValue(
        'var(--vt-c-bg)',
      ),
    },

    title: {
      text: '',
      style: {
        // TODO: fix this
        // color: getComputedStyle(document.documentElement).getPropertyValue(
        //   'var(--vt-c-text-1)',
        // ),
        // fill: getComputedStyle(document.documentElement).getPropertyValue(
        //   'var(--vt-c-text-1)',
        // ),
        color: 'orange',
      },
    },

    // subtitle: {
    //   text: 'When resizing the window or the frame, the chart should resize',
    // },

    xAxis: {
      title: {
        text: 'Distance (km)',
      },
      minPadding: 0.05,
    },

    yAxis: {
      startOnTick: true,
      endOnTick: false,
      minPadding: 0,
      title: {
        text: 'Elevation ( m )',
        style: {
          // TODO: fix this
          // color: getComputedStyle(document.documentElement).getPropertyValue(
          //   'var(--vt-c-text-1)',
          // ),
          color: 'blue',
        },
      },
      labels: {
        style: {
          // TODO: fix this
          // color: getComputedStyle(document.documentElement).getPropertyValue(
          //   'var(--vt-c-text-1)',
          // ),
          color: '#ff00ff',
        },
        align: 'left',
        x: 0,
        y: -2,
      },
    },

    tooltip: {
      headerFormat: '',
      pointFormat: 'Distance: {point.x} km<br/>{point.y} m a. s. l.',
      shared: true,
    },

    legend: {
      enabled: false,
    },

    series: [
      {
        data: data,
        name: 'Elevation',
        marker: {
          enabled: false,
          states: {
            hover: {
              enabled: true,
            },
          },
        },
        color: 'red',
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            // [0, 'rgba(65, 116, 158, 0.7)'],
            // [1, 'rgba(255, 255, 255, 0.7)'],
            [0, 'rgba(0, 0, 0, 1.0)'],
            [1, 'rgba(255, 255, 255, 1.0)'],
          ],
        },
        threshold: null,
        turboThreshold: 0,
      },
    ],
  })
}
</script>
<style>
#highchart-container {
  /* fill: var(--vt-c-text-1); */
}
</style>
