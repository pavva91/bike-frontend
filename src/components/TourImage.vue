<script setup>
import Rating1 from '../components/rating/Rating1.vue'
import Rating2 from '../components/rating/Rating2.vue'
import Rating3 from '../components/rating/Rating3.vue'
import Rating4 from '../components/rating/Rating4.vue'
import Rating5 from '../components/rating/Rating5.vue'

import { ref, computed, onBeforeMount, onBeforeUpdate } from 'vue'
import { filename } from 'pathe/utils'
import * as L from 'leaflet'
import 'leaflet-gpx'

const props = defineProps({
  type: {
    required: true,
  },
  id: {
    required: true,
  },
})

onBeforeUpdate(() => {
  computeGpxTot()
})

onBeforeMount(() => {
  computeGpxTot()
})

const computeGpxTot = () => {
  url = '/gpx/' + props.type + '/' + props.type + props.id + '.gpx'
  gpx = new L.GPX(url, {})

  tot_distance = Number((gpx.get_distance() / 1000).toFixed(2))
  el_gain = Number(gpx.get_elevation_gain().toFixed(2))
}
const imageName = computed(() => {
  return props.type + props.id
})

let url = '/gpx/' + props.type + '/' + props.type + props.id + '.gpx'
let gpx = null
// const tot_distance = ref(50)
let tot_distance = 50
let el_gain = 0
console.log('distance:', tot_distance)
const glob = import.meta.glob('@/assets/img/tours/**/*.jpg', { eager: true })
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default]),
)
</script>

<template>
  <div class="tour-image">
    <img :src="images[`${imageName}`]" alt="image route" />
    <div class="bottom-left"></div>
    <div class="top-left">
      <p>
        <span>{{ $t('tours.image.share') }}</span>
      </p>
    </div>
    <div class="top-right">
      <p>
        <span>{{ $t('tours.image.distance') }}: {{ tot_distance }} km</span>
        <br />
        <span>{{ $t('tours.image.elevation') }}: {{ el_gain }} m</span>
        <br />
        <span>
          <Rating1 v-if="$t('tours.' + props.type + '.' + props.id + '.rating') === '1'"></Rating1>
          <Rating2 v-if="$t('tours.' + props.type + '.' + props.id + '.rating') === '2'"></Rating2>
          <Rating3 v-if="$t('tours.' + props.type + '.' + props.id + '.rating') === '3'"></Rating3>
          <Rating4 v-if="$t('tours.' + props.type + '.' + props.id + '.rating') === '4'"></Rating4>
          <Rating5 v-if="$t('tours.' + props.type + '.' + props.id + '.rating') === '5'"></Rating5>
        </span>
      </p>
    </div>
    <div class="centered">
      <h1>{{ $t('tours.' + props.type + '.' + props.id + '.title') }}</h1>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.tour-image div {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: bold;
}

.tour-image img {
  width: 100%;
  height: 590px;
}

.tour-image h1 {
  font-size: 3rem;
  letter-spacing: 0.4px;
  color: var(--vt-c-white-soft);
}

@media (max-width: 1500px) {
  .tour-image img {
    height: 400px;
  }
}

@media (max-width: 1024px) {
  .tour-image img {
    height: 310px;
  }
}

@media (max-width: 480px) {
  .tour-image h1 {
    font-size: 2.5rem;
    letter-spacing: 0.3px;
  }

  .tour-image img {
    max-height: 170px;
  }
}

.tour-image {
  position: relative;
  text-align: center;
  color: var(--vt-c-gray-light-3);
  /* color: var(--vt-c-white-mute); */
  /* color: var(--vt-c-black); */
}

.bottom-left {
  display: block;
  position: absolute;
  bottom: 8px;
  left: 16px;
  /* font-weight: 800; */
  text-align: left;
  /* top: 2rem; */
  /* right: 2rem; */
  padding-bottom: 3rem;
  padding-left: 2rem;
}

.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}

.top-right {
  position: absolute;
  /* top: 8px; */
  /* right: 16px; */
  top: 2rem;
  right: 2rem;
  text-align: right;
  font-weight: 300;
  display: block;
}

.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}

.centered {
  /* font-size: 3.2rem; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* NOTE: 50rem = 800px */
/* NOTE: 80rem = 1280px */
@media screen and (max-width: 50rem) {
  .top-right {
    display: none;
  }

  .bottom-left {
    display: none;
  }
}
</style>
