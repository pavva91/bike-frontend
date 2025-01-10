<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import BackgroundImageFullScreen from '../components/background_image/BackgroundImageFullScreen.vue'
import CarouselHome from '../components/carousel/CarouselHome.vue'
import FullScreenCarousel from '../components/carousel/FullScreenCarousel.vue'
import TopCarousel from '../components/carousel/TopCarousel.vue'
import RollCarousel from '../components/carousel/roll/RollCarousel.vue'
import AboutView from '../views/AboutView.vue'
import ContactsView from '../views/ContactsView.vue'

import SilderImg01 from '../assets/img/tours/road/road1.jpg'
import SilderImg02 from '../assets/img/tours/mtb/mtb1.jpg'
import SilderImg03 from '../assets/img/tours/gravel/gravel1.jpg'

import RoadImg01 from '../assets/img/tours/road/road1.jpg'
import RoadImg02 from '../assets/img/tours/road/road2.jpg'
import RoadImg03 from '../assets/img/tours/road/road3.jpg'
import RoadImg04 from '../assets/img/tours/road/road4.jpg'

import MtbImg01 from '../assets/img/tours/mtb/mtb1.jpg'

import GravelImg01 from '../assets/img/tours/gravel/gravel1.jpg'

import resetSelection from '../utils/utils.js'

const items = [
  {
    img: SilderImg01,
    desc: 'Road',
  },
  {
    img: SilderImg02,
    desc: 'MTB',
  },
  {
    img: SilderImg03,
    desc: 'Gravel',
  },
]

const tourItems = [
  {
    img: RoadImg01,
    desc: 'I muri marchigiani',
    id: 1,
    type: 'road',
  },
  {
    img: RoadImg02,
    desc: 'Urbino e Cesane',
    id: 2,
    type: 'road',
  },
  {
    img: RoadImg03,
    desc: 'Fano - San Bartolo',
    id: 3,
    type: 'road',
  },
  {
    img: RoadImg04,
    desc: 'Fano tra onde e colline',
    id: 4,
    type: 'road',
  },
  {
    img: MtbImg01,
    desc: 'MTB',
    id: 1,
    type: 'mtb',
  },
  {
    img: GravelImg01,
    desc: 'GRAVEL',
    id: 1,
    type: 'gravel',
  },
]
const pictures = [
  { src: '/img/11978_cucine-lube-agnese-style-7-1.webp', alt: 'Image 1' },
  { src: '/img/tours/road/road1.jpg', alt: 'Image 1' },
  { src: '/img/tours/gravel/gravel1.jpg', alt: 'Image 2' },
  { src: '/img/tours/mtb/mtb1.jpg', alt: 'Image 3' },
]

function handleScroll() {
  let element = document.getElementById('about')
  element.classList.add('bounceInRight')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
  <BackgroundImageFullScreen></BackgroundImageFullScreen>
  <RollCarousel
    @click="resetSelection()"
    class="mx-auto bg-img-footer"
    :withMaskGradient="false"
    :withZoomIn="true"
    :items="tourItems"
  >
  </RollCarousel>
  <!-- <CarouselHome></CarouselHome> -->
  <!-- <FullScreenCarousel :pictures="pictures" slide :slide-interval="10000" /> -->
  <AboutView id="about"></AboutView>
  <TopCarousel :items="items" :noControls="false" :noIndicators="true" :duration="5000" />
  <ContactsView id="contacts"></ContactsView>
</template>
<style>
@media (max-width: 480px) {
  .bg-img-footer {
    height: 10vh;
    margin-top: 0px;
    margin-bottom: 10px;
  }
}
</style>
