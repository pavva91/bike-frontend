<template>
  <div id="highchart-container" style="width: 100%; height: 400px"></div>
</template>

<script setup>
import { onMounted } from 'vue'
// import { Highcharts } from 'highcharts'
import * as Highcharts from 'highcharts'

onMounted(() => {
  createChart()
})

const createChart = () => {
  // document.addEventListener('DOMContentLoaded', function () {
  const chart = Highcharts.chart('highchart-container', {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Fruit Consumption',
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges'],
    },
    yAxis: {
      title: {
        text: 'Fruit eaten',
      },
    },
    series: [
      {
        name: 'Jane',
        data: [1, 0, 4],
      },
      {
        name: 'John',
        data: [5, 7, 3],
      },
    ],
  })
  // })
}
</script>
