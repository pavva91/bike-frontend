<script setup>
import TourImage from '../components/TourImage.vue'
import RollCarousel from '../components/carousel/roll/RollCarousel.vue'
import { onMounted } from 'vue'

import RoadImg01 from '../assets/img/tours/road/road1.jpg'
import RoadImg02 from '../assets/img/tours/road/road2.jpg'
import RoadImg03 from '../assets/img/tours/road/road3.jpg'

import MtbImg01 from '../assets/img/tours/mtb/mtb1.jpg'
import GravelImg01 from '../assets/img/tours/gravel/gravel1.jpg'

const props = defineProps({
  type: {
    required: true,
  },
  id: {
    required: true,
  },
})

// TODO: each type (road, mtb, gravel) has its own list
let items = [
  {
    img: RoadImg01,
    desc: 'Road',
    url: 'http://localhost:5173/tours/road/1',
  },
  {
    img: MtbImg01,
    desc: 'MTB',
    url: 'http://localhost:5173/tours/mtb/1',
  },
  {
    img: GravelImg01,
    desc: 'Gravel',
    url: 'http://localhost:5173/tours/gravel/1',
  },
]

const roadItems = [
  {
    img: RoadImg01,
    // TODO: must be dynamic and translated
    desc: 'I muri marchigiani',
    url: 'http://localhost:5173/tours/road/1',
  },
  {
    img: RoadImg02,
    desc: 'Cesane',
    url: 'http://localhost:5173/tours/road/2',
  },
  {
    img: RoadImg03,
    desc: 'San Bartolo',
    url: 'http://localhost:5173/tours/road/3',
  },
]

const mtbItems = [
  {
    img: MtbImg01,
    desc: 'MTB',
    url: 'http://localhost:5173/tours/mtb/1',
  },
]

const gravelItems = [
  {
    img: GravelImg01,
    desc: 'GRAVEL',
    url: 'http://localhost:5173/tours/gravel/1',
  },
]

if (props.type == 'road') {
  console.log('hello road')
  items = [
    {
      img: RoadImg01,
      desc: 'Road',
      url: 'http://localhost:5173/tours/road/1',
    },
  ]
} else {
  if (props.type == 'mtb') {
    console.log('hello mtb')
    items = [
      {
        img: MtbImg01,
        desc: 'MTB',
        url: 'http://localhost:5173/tours/mtb/1',
      },
    ]
  } else {
    if (props.type == 'gravel') {
      items = [
        {
          img: GravelImg01,
          desc: 'Gravel',
          url: 'http://localhost:5173/tours/gravel/1',
        },
      ]
    }
  }
}

onMounted(() => {
  // console.log('hello everyone')
})
</script>
<template>
  <div class="tours">
    <TourImage v-bind="$props"></TourImage>
    <!-- <RollCarousel :items="items"></RollCarousel> -->
    <RollCarousel v-if="$props.type == 'road'" :items="roadItems"></RollCarousel>
    <RollCarousel v-if="$props.type == 'mtb'" :items="mtbItems"></RollCarousel>
    <RollCarousel v-if="$props.type == 'gravel'" :items="gravelItems"></RollCarousel>

    <h2>{{ $t('tours.tourist-info-title') }}</h2>
    <p>{{ $t('tours.' + props.type + '.' + props.id + '.tourist-info') }}</p>
    <h2>{{ $t('tours.technical-info-title') }}</h2>
    <p>{{ $t('tours.' + props.type + '.' + props.id + '.technical-info') }}</p>
    <h2>{{ $t('tours.strava') }}</h2>
    <p>TODO: Use strava API</p>
    <p>{{ props.type }}</p>
    <p>{{ props.id }}</p>
    <p>{{ $route.fullPath }}</p>
  </div>
</template>

<style></style>
