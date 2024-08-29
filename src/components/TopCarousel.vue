<!-- NOTE: https://cruip.com/create-a-carousel-with-progress-indicators-using-tailwind-and-vue/ -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { TransitionRoot } from '@headlessui/vue'

import SilderImg01 from '../assets/img/tours/road/road1.jpg'
import SilderImg02 from '../assets/img/tours/mtb/mtb1.jpg'
// import SilderImg03 from '../assets/ps-image-03.png'
// import SilderImg04 from '../assets/ps-image-04.png'
import SilderIcon01 from '../../public/favicon.ico'
import SilderIcon02 from '../../public/favicon.ico'
// import SilderIcon03 from '../assets/ps-icon-03.svg'
// import SilderIcon04 from '../assets/ps-icon-04.svg'

const itemsRef = ref<HTMLCanvasElement | null>(null)
const frame = ref<number>(0)
const firstFrameTime = ref(performance.now())
const active = ref<number>(0)
const progress = ref<number>(0)

interface Item {
  img: string
  desc: string
  buttonIcon: string
}

const props = defineProps<{
  items: Item[]
  noControls: {
    type: Boolean
    default: false
  }
  noIndicators: {
    type: Boolean
    default: false
  }
  duration: {
    type: Number
    default: 5000
  }
}>()

const items = props.items

const startAnimation = () => {
  firstFrameTime.value = performance.now()
  frame.value = requestAnimationFrame(animate)
}

const animate = (now: number) => {
  let timeDifference = now - firstFrameTime.value
  let timeFraction = Math.max(0, timeDifference) / props.duration
  if (timeFraction <= 1) {
    progress.value = timeFraction * 100
    frame.value = requestAnimationFrame(animate)
  } else {
    timeFraction = 1
    progress.value = 0
    active.value = (active.value + 1) % items.length
  }
}

const heightFix = async () => {
  await nextTick()
  if (itemsRef.value && itemsRef.value.parentElement)
    itemsRef.value.parentElement.style.height = `${itemsRef.value.clientHeight}px`
}

const nextPicture = () => {
  if (active.value !== props.items.length - 1) {
    active.value++
  } else {
    active.value = 0
  }
  // direction.value = 'right'
  // resetInterval()
}

const previousPicture = () => {
  if (active.value !== 0) {
    active.value--
  } else {
    active.value = props.items.length - 1
  }
  // direction.value = 'left'
  // resetInterval()
}

onMounted(() => startAnimation())

onUnmounted(() => cancelAnimationFrame(frame.value))

watch(active, () => {
  cancelAnimationFrame(frame.value)
  startAnimation()
})
</script>

<template>
  <!-- class="w-full max-w-5xl mx-auto text-center h-screen overflow-hidden" -->
  <div class="relative overflow-hidden max-w-5xl mx-auto text-center w-screen overflow-hidden">
    <!-- Item image -->
    <!-- <div class="transition-all duration-700 delay-300 ease-in-out"> -->
    <!--   <div class="relative flex-col"> -->
    <!--     <template :key="index" v-for="(item, index) in items"> -->
    <!--       <TransitionRoot :show="active === index" enter="transition ease-in-out duration-500 delay-200 order-first" -->
    <!--         enterFrom="opacity-0 scale-105" enterTo="opacity-100 scale-100" -->
    <!--         leave="transition ease-in-out duration-300 absolute" leaveFrom="opacity-100 scale-100" -->
    <!--         leaveTo="opacity-0 scale-95"> -->
    <!--         <img class="rounded-xl" :src="item.img" width="1024" height="576" :alt="item.desc" /> -->
    <!--       </TransitionRoot> -->
    <!--     </template> -->
    <!--   </div> -->
    <!-- </div> -->

    <!-- NOTE: slider copied from TailWindCarousel.vue -->
    <!-- <div id="carousel-frame" class="overflow-hidden relative h-56 sm:h-64 xl:h-80 2xl:h-96"> -->
    <div id="carousel-frame" class="overflow-hidden relative h-56 sm:h-40 xl:h-80 2xl:h-96">
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="index === active ? 'z-30' : 'z-0'"
        class="absolute inset-0 -translate-y-0"
      >
        <img
          :alt="item.desc"
          :src="item.img"
          class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <!-- Buttons -->
      <template v-if="!noControls">
        <button
          class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-prev
          type="button"
          @click.prevent="previousPicture"
        >
          <span
            class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19l-7-7 7-7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
            <span class="hidden">Previous</span>
          </span>
        </button>
        <button
          class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-next
          type="button"
          @click.prevent="nextPicture"
        >
          <span
            class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
            <span class="hidden">Next</span>
          </span>
        </button>
      </template>
    </div>

    <!-- Indicators -->
    <div
      v-if="!noIndicators"
      class="relative top-1/2 left-1/2 z-30 -translate-x-1/2 space-x-3 rtl:space-x-reverse"
    >
      <template :key="index" v-for="(item, index) in items">
        <button
          :class="index === active ? 'bg-gray-400' : 'bg-gray-200'"
          type="button"
          class="h-2 w-2 rounded-full bg-gray-200"
          aria-current="true"
          @click="active = index"
        ></button>
      </template>
    </div>
  </div>
</template>

<style>
@media (max-width: 640px) {
  #carousel-frame {
    height: 10rem;
  }
}
</style>
