<script setup>
import { RouterView } from 'vue-router'
import { computed, inject, ref, onMounted, onUnmounted } from 'vue'
import MenuDesktop from './components/MenuDesktop.vue'
import MenuMobile from './components/MenuMobile.vue'
import FooterView from './views/FooterView.vue'

const GStore = inject('GStore')

const width = ref(window.innerWidth)

// Update the width ref when the window is resized
function onResize() {
  width.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})

// Define breakpoints
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
}

// Compute properties for each breakpoint
const isSmall = computed(() => width.value < breakpoints.sm)
const isMedium = computed(() => width.value >= breakpoints.sm && width.value < breakpoints.md)
const isLarge = computed(() => width.value >= breakpoints.md && width.value < breakpoints.lg)
const isExtraLarge = computed(() => width.value >= breakpoints.lg)
</script>

<template>
  <div class="header-wrapper">
    <div v-if="isSmall">
      <MenuMobile></MenuMobile>
    </div>
    <div v-else-if="isMedium">
      <MenuMobile></MenuMobile>
    </div>
    <div v-else-if="isLarge">
      <MenuMobile></MenuMobile>
    </div>
    <div v-else-if="isExtraLarge">
      <MenuDesktop></MenuDesktop>
    </div>
    <div v-else>
      <MenuDesktop></MenuDesktop>
    </div>
  </div>

  <div id="layout">
    <div id="flashMessage" v-if="GStore.flashMessage">
      {{ GStore.flashMessage }}
    </div>
    <header>
      <div class="wrapper">
        <nav>
          <!-- <p>(Store) Logged in as {{ userStore.user }}</p> -->
          <!-- <p>(Getter) Logged in as {{ userStore.firstName }}</p> -->
        </nav>
      </div>
    </header>
    <RouterView />
    <FooterView></FooterView>
  </div>
</template>

<style>
@media (max-width: 1024px) {
  #layout {
    padding-top: 0px;
  }
}
@keyframes yellowfade {
  from {
    background: Yellow;
  }

  to {
    background: transparent;
  }
}
</style>
