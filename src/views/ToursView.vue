<script setup>
import ToursCarousel from '../components/ToursCarousel.vue'
</script>
<template>
  <div class="tours">
    <!-- <h1>{{ $t('tours.title') }}</h1> -->
    <img src="../assets/img/tours/route01.jpg" alt="image route" />
    <ToursCarousel></ToursCarousel>
    <h2>{{ $t('tours.tourist-title') }}</h2>
    <p>{{ $t('tours.tourist') }}</p>
    <h2>{{ $t('tours.info-title') }}</h2>
    <p>{{ $t('tours.info') }}</p>
    <h2>{{ $t('tours.strava') }}</h2>
    <p>TODO: Use strava API</p>
  </div>
</template>

<style></style>
