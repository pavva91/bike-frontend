<script setup>
import CarouselHome from '../components/carousel/CarouselHome.vue'
import FullScreenCarousel from '../components/carousel/FullScreenCarousel.vue'
import TopCarousel from '../components/carousel/TopCarousel.vue'

import SilderImg01 from '../assets/img/tours/road/road1.jpg'
import SilderImg02 from '../assets/img/tours/mtb/mtb1.jpg'
import SilderImg03 from '../assets/img/tours/gravel/gravel1.jpg'
// import SilderImg01 from '../assets/img/lube1.webp'
// import SilderImg02 from '../assets/img/lube2.webp'
// import SilderImg03 from '../assets/ps-image-03.png'
// import SilderImg04 from '../assets/ps-image-04.png'
import SilderIcon01 from '../../public/favicon.ico'
import SilderIcon02 from '../../public/favicon.ico'
// import SilderIcon03 from '../assets/ps-icon-03.svg'
// import SilderIcon04 from '../assets/ps-icon-04.svg'

const items = [
  {
    img: SilderImg01,
    desc: 'Road',
    buttonIcon: SilderIcon01
  },
  {
    img: SilderImg02,
    desc: 'MTB',
    buttonIcon: SilderIcon02
  },
  {
    img: SilderImg03,
    desc: 'Gravel',
    buttonIcon: SilderIcon02
  }
  // {
  //   img: SilderImg03,
  //   desc: 'Interpolate',
  //   buttonIcon: SilderIcon03,
  // },
  // {
  //   img: SilderImg04,
  //   desc: 'Enriched',
  //   buttonIcon: SilderIcon04,
  // },
]

const pictures = [
  { src: '/img/11978_cucine-lube-agnese-style-7-1.webp', alt: 'Image 1' },
  { src: '/img/tours/road/road1.jpg', alt: 'Image 1' },
  { src: '/img/tours/gravel/gravel1.jpg', alt: 'Image 2' },
  { src: '/img/tours/mtb/mtb1.jpg', alt: 'Image 3' }
]
</script>
<template>
  <TopCarousel :items="items" :noControls="false" :noIndicators="false" :duration="5000" />
  <!-- <CarouselHome></CarouselHome> -->
  <!-- <FullScreenCarousel :pictures="pictures" slide :slide-interval="10000" /> -->
</template>
