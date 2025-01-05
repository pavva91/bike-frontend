<template>
  <div id="height-profile-container"></div>
</template>

<script setup>
import { onMounted, onBeforeUpdate } from 'vue'
import * as Highcharts from 'highcharts'

const props = defineProps({
  type: {
    required: true,
  },
  id: {
    required: true,
  },
  startLabel: {
    required: true,
  },
  finishLabel: {
    required: true,
  },
  xAxis: {
    required: true,
  },
  yAxis: {
    required: true,
  },
})

onBeforeUpdate(() => {
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
let wayPointLabels = {}

function readXml(xmlFile) {
  var xmlDoc
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.open('GET', xmlFile, false)
  if (xmlhttp.overrideMimeType) {
    xmlhttp.overrideMimeType('text/xml')
  }
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
  let trackPointsArr = Array.prototype.slice.call(trackPoints, 0)

  let wayPoints = xml.getElementsByTagName('wpt')
  // NOTE: Reset way points labels
  wayPointLabels = {}
  wayPointLabels[0] = {
    enabled: true,
    format: props.startLabel,
    rotation: 0,
    alight: 'right',
  }
  wayPointLabels[trackPointsArr.length - 1] = {
    enabled: true,
    format: props.finishLabel,
    rotation: 0,
    alight: 'right',
  }

  wayPoints = Array.prototype.slice.call(wayPoints, 0)
  wayPoints.forEach((wp, i) => {
    let k = 0
    let label = wp.children[0].innerHTML
    let lat = wp.getAttribute('lat')
    let lon = wp.getAttribute('lon')
    let point = {
      lat: lat,
      lon: lon,
    }
    trackPointsArr.forEach((trkpt, i) => {
      // TODO: optimize it
      // NOTE: <wpt lat="43.68796" lon="13.09904">
      // NOTE: <trkpt lat="42.88873402030438" lon="13.906940016378616">
      const tplat = parseFloat(trkpt.getAttribute('lat'))
      const tplon = parseFloat(trkpt.getAttribute('lon'))
      const t1 = tplat * 100000
      const trlat = Math.trunc(t1) / 100000
      const t2 = tplon * 100000
      const trlon = Math.trunc(t2) / 100000
      let j = 1
      if (trlat.toString() === lat && trlon.toString() === lon) {
        j = j + 1
        k = i
      }
    })

    wayPointLabels[k] = {
      enabled: true,
      format: label,
      rotation: 0,
      alight: 'right',
    }
  })

  // trackPoints = Array.prototype.slice.call(trackPoints, 0)

  // Iterate over the track points, get cumulative distance and elevation
  trackPointsArr.forEach((trkpt, i) => {
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
      y: ele,
      dataLabels: wayPointLabels[i],
      marker: wayPointLabels[i]
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

  const chartHeightProfile = Highcharts.chart('height-profile-container', {
    chart: {
      // type: 'area',
      backgroundColor: getComputedStyle(document.documentElement).getPropertyValue(
        'var(--vt-c-bg)',
      ),
    },

    title: {
      text: '',
    },

    // subtitle: {
    //   text: 'When resizing the window or the frame, the chart should resize',
    // },

    xAxis: {
      title: {
        text: props.xAxis + ' (km)',
      },
      minPadding: 0.05,
    },

    yAxis: {
      startOnTick: true,
      endOnTick: false,
      minPadding: 0,
      title: {
        text: props.yAxis + ' ( m )',
      },
      labels: {
        align: 'left',
        x: 0,
        y: -2,
      },
    },

    tooltip: {
      headerFormat: '',
      pointFormat: props.xAxis + ': {point.x} km<br/>' + props.yAxis + ': {point.y} m',
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
#height-profile-container {
  width: 100%;
  height: 400px;
}

@media (max-width: 480px) {
  #height-profile-container {
    height: 200px;
  }
}

.highcharts-yaxis-grid .highcharts-grid-line {
  stroke-width: 1px;
  stroke: var(--vt-c-text-1);
}

.highcharts-axis-line {
  stroke-width: 1px;
  stroke: var(--vt-c-text-1);
}

.highcharts-axis-labels {
  stroke-width: 1px;
  stroke: var(--vt-c-text-1);
}

.highcharts-xaxis {
  stroke-width: 1px;
  stroke: var(--vt-c-text-1);
}

.highcharts-yaxis {
  stroke-width: 1px;
  stroke: var(--vt-c-text-1);
}

.highcharts-tick {
  stroke-width: 1px;
  stroke: var(--vt-c-text-1);
}

.highcharts-xaxis-grid .highcharts-grid-line {
  stroke-width: 0px;
}

.highcharts-credits {
  display: none;
}
</style>
