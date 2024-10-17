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

// TODO: use i18n for descriptions
const roadItems = [
  {
    img: RoadImg01,
    desc: 'I muri marchigiani',
    id: 1,
  },
  {
    img: RoadImg02,
    desc: 'Urbino e Cesane',
    id: 2,
  },
  {
    img: RoadImg03,
    desc: 'San Bartolo',
    id: 3,
  },
]

const mtbItems = [
  {
    img: MtbImg01,
    desc: 'MTB',
    id: 1,
  },
]

const gravelItems = [
  {
    img: GravelImg01,
    desc: 'GRAVEL',
    id: 1,
  },
]

onMounted(() => {
  // console.log('hello everyone')
})
</script>
<template>
  <div class="tours">
    <TourImage v-bind="$props"></TourImage>

    <RollCarousel v-if="$props.type == 'road'" type="road" :items="roadItems"></RollCarousel>
    <RollCarousel v-if="$props.type == 'mtb'" type="mtb" :items="mtbItems"></RollCarousel>
    <RollCarousel v-if="$props.type == 'gravel'" type="gravel" :items="gravelItems"></RollCarousel>

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
