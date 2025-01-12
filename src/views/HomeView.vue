<script setup>
import { onMounted, onBeforeUnmount, defineAsyncComponent } from 'vue'
import BackgroundImageFullScreen from '../components/background_image/BackgroundImageFullScreen.vue'
import CarouselHome from '../components/carousel/CarouselHome.vue'
import FullScreenCarousel from '../components/carousel/FullScreenCarousel.vue'
import TopCarousel from '../components/carousel/TopCarousel.vue'
import RollCarousel from '../components/carousel/roll/RollCarousel.vue'
import AboutView from '../views/AboutView.vue'

// NOTE: Lazy Load Component
// import ContactsView from '../views/ContactsView.vue'
const ContactsView = defineAsyncComponent(() => import('../views/ContactsView.vue'))

import SilderImg01 from '../assets/img/tours/road/road1.jpg'
import SilderImg02 from '../assets/img/tours/mtb/mtb1.jpg'
import SilderImg03 from '../assets/img/tours/gravel/gravel1.jpg'

import RoadImg01 from '../assets/img/tours/road/road1.jpg'
import RoadImg02 from '../assets/img/tours/road/road2.jpg'
import RoadImg03 from '../assets/img/tours/road/road3.jpg'
import RoadImg04 from '../assets/img/tours/road/road4.jpg'
import RoadImg05 from '../assets/img/tours/road/road5.jpg'

import MtbImg01 from '../assets/img/tours/mtb/mtb1.jpg'
import MtbImg02 from '../assets/img/tours/mtb/mtb2.jpg'

import GravelImg01 from '../assets/img/tours/gravel/gravel1.jpg'

import resetSelection from '../utils/utils.js'

import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

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
    desc: t('tours.road.1.title'),
    id: 1,
    type: 'road',
  },
  {
    img: RoadImg02,
    desc: t('tours.road.2.title'),
    id: 2,
    type: 'road',
  },
  {
    img: RoadImg03,
    desc: t('tours.road.3.title'),
    id: 3,
    type: 'road',
  },
  {
    img: RoadImg04,
    desc: t('tours.road.4.title'),
    id: 4,
    type: 'road',
  },
  {
    img: RoadImg05,
    desc: t('tours.road.5.title'),
    id: 5,
    type: 'road',
  },
  {
    img: MtbImg01,
    desc: t('tours.mtb.1.title'),
    id: 1,
    type: 'mtb',
  },
  {
    img: MtbImg02,
    desc: t('tours.mtb.2.title'),
    id: 2,
    type: 'mtb',
  },
  {
    img: GravelImg01,
    desc: t('tours.gravel.1.title'),
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
    :withShuffle="false"
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
