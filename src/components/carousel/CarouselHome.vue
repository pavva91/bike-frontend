<script setup>
import { FwbCarousel } from 'flowbite-vue'

const pictures = [
  { src: '/img/11978_cucine-lube-agnese-style-7-1.webp', alt: 'Image 1' },
  { src: '/img/tours/road/road1.jpg', alt: 'Image 1' },
  { src: '/img/tours/gravel/gravel1.jpg', alt: 'Image 2' },
  { src: '/img/tours/mtb/mtb1.jpg', alt: 'Image 3' }
]
</script>

<template>
  <fwb-carousel
    style="height: 200px"
    class="relative h-screen"
    :pictures="pictures"
    slide
    :slide-interval="10000"
  />
</template>

<style></style>
