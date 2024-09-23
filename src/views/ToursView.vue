<script setup>
import TourImage from '../components/TourImage.vue'
import RollCarousel from '../components/carousel/roll/RollCarousel.vue'
import { onMounted } from 'vue'

import SilderImg01 from '../assets/img/tours/road/road1.jpg'
import SilderImg02 from '../assets/img/tours/mtb/mtb1.jpg'
import SilderImg03 from '../assets/img/tours/gravel/gravel1.jpg'

const props = defineProps({
  type: {
    required: true,
  },
  id: {
    required: true,
  },
})

onMounted(() => {
  // console.log(props.biketype)
})

const items = [
  {
    img: SilderImg01,
    desc: 'Road',
    url: '#',
  },
  {
    img: SilderImg02,
    desc: 'MTB',
    url: '#',
  },
  {
    img: SilderImg03,
    desc: 'Gravel',
    url: '#',
  },
  {
    img: SilderImg01,
    desc: 'Road',
    url: '#',
  },
  {
    img: SilderImg02,
    desc: 'MTB',
    url: '#',
  },
  {
    img: SilderImg03,
    desc: 'Gravel',
    url: '#',
  },
]
</script>
<template>
  <div class="tours">
    <TourImage v-bind="$props"></TourImage>
    <RollCarousel :items="items"></RollCarousel>

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
