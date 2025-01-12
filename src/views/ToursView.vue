<script setup>
import TourImage from '../components/TourImage.vue'
import RollCarousel from '../components/carousel/roll/RollCarousel.vue'

import RoadImg01 from '../assets/img/tours/road/road1.jpg'
import RoadImg02 from '../assets/img/tours/road/road2.jpg'
import RoadImg03 from '../assets/img/tours/road/road3.jpg'
import RoadImg04 from '../assets/img/tours/road/road4.jpg'
import RoadImg05 from '../assets/img/tours/road/road5.jpg'

import MtbImg01 from '../assets/img/tours/mtb/mtb1.jpg'
import MtbImg02 from '../assets/img/tours/mtb/mtb2.jpg'

import GravelImg01 from '../assets/img/tours/gravel/gravel1.jpg'

import LeafletMap from '../components/LeafletMap.vue'

import HighChartHeightProfile from '../components/HighChartHeightProfile.vue'

import { ref, onBeforeUpdate, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const componentKey = ref(true)
const forceRerenderRollCarousel = () => {
  componentKey.value = !componentKey.value
}

const chartOptions = ref({
  series: [
    {
      data: [1, 2, 3],
    },
  ],
})

const props = defineProps({
  type: {
    required: true,
  },
  id: {
    required: true,
  },
})

// TODO: use i18n for descriptions
const roadItems = [
  {
    img: RoadImg01,
    desc: t('tours.road.1.title'),
    id: 1,
    type: 'road',
  },
  {
    img: RoadImg02,
    desc: t('tours.road.2.title'),
    id: 2,
    type: 'road',
  },
  {
    img: RoadImg03,
    desc: t('tours.road.3.title'),
    id: 3,
    type: 'road',
  },
  {
    img: RoadImg04,
    desc: t('tours.road.4.title'),
    id: 4,
    type: 'road',
  },
  {
    img: RoadImg05,
    desc: t('tours.road.5.title'),
    id: 5,
    type: 'road',
  },
]

const mtbItems = [
  {
    img: MtbImg01,
    desc: t('tours.mtb.1.title'),
    id: 1,
    type: 'mtb',
  },
  {
    img: MtbImg02,
    desc: t('tours.mtb.2.title'),
    id: 2,
    type: 'mtb',
  },
]

const gravelItems = [
  {
    img: GravelImg01,
    desc: t('tours.gravel.1.title'),
    id: 1,
    type: 'gravel',
  },
]

const router = useRouter()

onBeforeMount(() => {
  if (props.id < 1 || props.id > 5) {
    router.push({
      name: '404Resource',
      params: { resource: 'tour' },
    })
  }
  switch (props.type) {
    case 'road':
      break
    case 'mtb':
      break
    case 'gravel':
      break

    default:
      router.push({
        name: '404Resource',
        params: { resource: 'tour' },
      })
      break
  }
})

onBeforeUpdate(() => {
  console.log('length items update:', roadItems)
  forceRerenderRollCarousel()
})
</script>
<template>
  <div class="tours">
    <TourImage v-bind="$props"></TourImage>

    <RollCarousel
      v-if="$props.type == 'road'"
      type="road"
      :withMaskGradient="true"
      :items="roadItems"
      :selectedTourId="$props.id"
      :withShuffle="true"
      :key="componentKey"
    ></RollCarousel>
    <RollCarousel
      v-if="$props.type == 'mtb'"
      type="mtb"
      :withMaskGradient="true"
      :items="mtbItems"
      :selectedTourId="$props.id"
      :withShuffle="true"
      :key="componentKey"
    ></RollCarousel>
    <RollCarousel
      v-if="$props.type == 'gravel'"
      type="gravel"
      :withMaskGradient="true"
      :items="gravelItems"
      :selectedTourId="$props.id"
      :withShuffle="true"
      :key="componentKey"
    >
    </RollCarousel>

    <h2>{{ $t('tours.tourist-info-title') }}</h2>
    <p v-html="$t('tours.' + props.type + '.' + props.id + '.tourist-info')"></p>
    <h2>{{ $t('tours.technical-info-title') }}</h2>
    <p>{{ $t('tours.' + props.type + '.' + props.id + '.technical-info') }}</p>
    <h2>{{ $t('tours.route-title') }}</h2>

    <br />
    <LeafletMap v-bind="$props"></LeafletMap>
    <br />
    <br />
    <HighChartHeightProfile
      v-bind="$props"
      :startLabel="$t('tours.gpx-height.start')"
      :finishLabel="$t('tours.gpx-height.finish')"
      :xAxisLabel="$t('tours.gpx-height.xaxis')"
      :yAxisLabel="$t('tours.gpx-height.yaxis')"
    ></HighChartHeightProfile>

    <!-- <div v-if="$props.type === 'road' && $props.id === '4'"> -->
    <!--   <iframe id="komoot_iframe" :src="komoot_full" frameborder="0"></iframe> -->
    <!-- </div> -->

    <!-- <div v-if="$props.type === 'road' && $props.id === '3'"> -->
    <!--   <iframe -->
    <!--     height="405" -->
    <!--     width="590" -->
    <!--     frameborder="0" -->
    <!--     allowtransparency="true" -->
    <!--     scrolling="no" -->
    <!--     src="https://www.strava.com/segments/7041089/embed" -->
    <!--   ></iframe> -->
    <!-- </div> -->

    <!-- <div v-if="$props.type === 'road' && $props.id === '2'"> -->
    <!--   <iframe -->
    <!--     height="500px" -->
    <!--     width="100%" -->
    <!--     frameborder="0" -->
    <!--     allowtransparency="true" -->
    <!--     src="https://www.strava.com/routes/3216345703092077180" -->
    <!--   ></iframe> -->
    <!-- </div> -->

    <!-- <div v-if="$props.type === 'road' && $props.id === '1'"> -->
    <!--   <iframe -->
    <!--     height="800px" -->
    <!--     width="100%" -->
    <!--     frameborder="0" -->
    <!--     allowtransparency="true" -->
    <!--     src="https://www.outdooractive.com/it/route/cicloturismo/italia/cupramontana-e-le-sue-colline/236745013/embed.html?flexView=true" -->
    <!--   ></iframe> -->
    <!-- </div> -->

    <!-- <div v-if="$props.type === 'road' && $props.id === '1'"> -->
    <!--   <iframe height='500px' width='100%' frameborder='0' allowtransparency='true' src='src="https://staging.strava-embeds.com/route/3217800058174684208?fullWidth=true&style=hybrid&terrain=3d&clubId=176292&fromEmbed=true#ns=a51e121a-8908-4962-8fda-2a47bb66a13f&hostOrigin=https%3A%2F%2Fstories.strava.com&hostPath=%2Farticles%2F2024-giro-ditalia-preview&hostTitle=2024+Giro+d%E2%80%99Italia+Preview&mapHash=9.22/45.8357/11.9423/0/64"'></iframe> -->
    <!-- </div> -->

    <!-- <button @click="getActivity()">Get Activity</button> -->

    <!-- <highcharts :options="chartOptions"></highcharts> -->

    <!-- <Chart></Chart> -->
    <!-- <ChartSimple></ChartSimple> -->

    <br />

    <button class="cta-dl-gpx bg-red-700 hover:bg-red-300 text-white font-bold py-2 px-4 rounded">
      <a class="inline-flex items-center" :href="`/gpx/${props.type}/${props.type}${props.id}.gpx`">
        <svg
          class="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>

        <span>{{ $t('tours.download-gpx-cta') }}</span>
      </a>
    </button>
    <br />
  </div>
</template>

<style>
#komoot_iframe {
  width: 100%;
  height: 800px;
}

.cta-dl-gpx {
  margin-top: 16px;
  margin-bottom: 16px;
}

.cta-dl-gpx a {
  vertical-align: middle;
}

.cta-dl-gpx:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 128 128 / var(--tw-bg-opacity));
}
</style>
