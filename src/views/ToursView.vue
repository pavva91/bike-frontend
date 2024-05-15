<script setup>
import TourImage from '../components/TourImage.vue'
import ToursCarousel from '../components/ToursCarousel.vue'
import { onMounted } from 'vue'
const props = defineProps({
  biketype: {
    required: true
  }
})

onMounted(() => {
  // console.log(props.biketype)
})
</script>
<template>
  <div class="tours">
    <!-- <h1>{{ $t('tours.title') }}</h1> -->
    <TourImage></TourImage>
    <ToursCarousel></ToursCarousel>
    <h2>{{ $t('tours.tourist-title') }}</h2>
    <p>{{ $t('tours.tourist') }}</p>
    <h2>{{ $t('tours.info-title') }}</h2>
    <p>{{ $t('tours.info') }}</p>
    <h2>{{ $t('tours.strava') }}</h2>
    <p>TODO: Use strava API</p>
    <p>{{props.biketype}}</p>
  </div>
</template>

<style></style>
