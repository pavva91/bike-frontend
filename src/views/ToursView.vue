<script setup>
import TourImage from '../components/TourImage.vue'
import ToursCarousel from '../components/ToursCarousel.vue'
import { onMounted } from 'vue'
const props = defineProps({
  type: {
    required: true
  },
  id: {
    required: true
  }
})

onMounted(() => {
  // console.log(props.biketype)
})
</script>
<template>
  <div class="tours">
    <TourImage v-bind="$props"></TourImage>
    <ToursCarousel></ToursCarousel>
    <h2>{{ $t('tours.tourist-info-title') }}</h2>
    <p>{{ $t('tours.' + props.type + '.' + props.id + '.tourist-info') }}</p>
    <h2>{{ $t('tours.technical-info-title') }}</h2>
    <h2>{{ $t('tours.strava') }}</h2>
    <p>TODO: Use strava API</p>
    <p>{{ props.type }}</p>
    <p>{{ props.id }}</p>
    <p>{{ $route.fullPath }}</p>
  </div>
</template>

<style></style>
