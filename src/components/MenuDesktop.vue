<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import VTSwitchAppearance from '../core/components/VTSwitchAppearance.vue'

import resetSelection from '../utils/utils.js'

const hover = ref(false)

function changeSelectedMenuItem(event) {
  let nav_ul = document.getElementById('navbar-ul')
  for (const ch in nav_ul.children) {
    if (nav_ul.children.hasOwnProperty(ch)) {
      const element = nav_ul.children[ch]
      if (element.children[0]) {
        element.children[0].style.color = getComputedStyle(
          document.documentElement,
        ).getPropertyValue('var(--vt-c-text-1)')
      }
    }
  }
  event.target.style.color = getComputedStyle(document.documentElement).getPropertyValue(
    '--vt-c-text-selected',
  )
}

// function resetSelection() {
//   let nav_ul = document.getElementById('navbar-ul')
//   for (const ch in nav_ul.children) {
//     if (nav_ul.children.hasOwnProperty(ch)) {
//       const element = nav_ul.children[ch]
//       if (element.children[0]) {
//         element.children[0].style.color = getComputedStyle(
//           document.documentElement,
//         ).getPropertyValue('var(--vt-c-text-1)')
//       }
//     }
//   }
// }
</script>

<template>
  <nav class="desktop-navbar-nav left-0 bg-white fixed w-full">
    <div class="p-1 desktop-menu-div max-w-screen-xl flex flex-wrap justify-between mx-auto">
      <!-- <a href="https://flowbite.com/" class="flex space-x-3 rtl:space-x-reverse"> -->

      <RouterLink
        @click="resetSelection()"
        :to="{ name: 'Home' }"
        class="flex items-center space-x-3 monoton-regular"
      >
        <img src="@/assets/menu_logo.png" class="h-8" alt="Enterprise Logo" />
        <!-- TODO: My company name -->
        <span class="text-2xl font-semibold whitespace-nowrap dark:text-white">{{
          $t('company')
        }}</span>
      </RouterLink>

      <!-- </a> -->
      <div
        class="tailwind-sucks items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      >
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white"
          id="navbar-ul"
        >
          <li>
            <RouterLink @click="changeSelectedMenuItem($event)" :to="{ name: 'Home' }">{{
              $t('nav.home')
            }}</RouterLink>
          </li>
          <li>
            <RouterLink
              @click="changeSelectedMenuItem($event)"
              :to="{ name: 'Home', hash: '#about' }"
              >{{ $t('nav.about') }}</RouterLink
            >
          </li>
          <li>
            <RouterLink
              @click="changeSelectedMenuItem($event)"
              :to="{ name: 'Home', hash: '#contacts' }"
              >{{ $t('nav.contacts') }}</RouterLink
            >
          </li>
          <li @mouseover="hover = true" @mouseleave="hover = false">
            {{ $t('nav.tours') }}
            <ul @click="changeSelectedMenuItem($event)" class="sub-menu bg-white" v-if="hover">
              <li>
                <RouterLink :to="{ name: 'Tours', params: { type: 'road', id: 1 } }"
                  >{{ $t('nav.types.road') }}
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="{ name: 'Tours', params: { type: 'mtb', id: 1 } }">{{
                  $t('nav.types.mtb')
                }}</RouterLink>
              </li>
              <li>
                <RouterLink :to="{ name: 'Tours', params: { type: 'gravel', id: 1 } }"
                  >{{ $t('nav.types.gravel') }}
                </RouterLink>
              </li>
            </ul>
          </li>
          <!-- <li> -->
          <!--   <RouterLink :to="{ name: 'EventList' }">Events Pagination</RouterLink> -->
          <!-- </li> -->
          <!-- <li> -->
          <!--   <RouterLink :to="{ name: 'EventListPinia' }">Events using store pinia</RouterLink> -->
          <!-- </li> -->
          <!-- <li> -->
          <!--   <RouterLink :to="{ name: 'EventCreate' }">Create Event</RouterLink> -->
          <!-- </li> -->
          <li>
            <LanguageSwitcher></LanguageSwitcher>
            <!-- INFO: https://vitepress.dev/ -->
            <!-- INFO: https://vuejs.org/ -->
          </li>
          <li>
            <div class="VPNavScreenAppearance">
              <VTSwitchAppearance></VTSwitchAppearance>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.desktop-navbar-nav {
  background-color: var(--vt-c-bg);
}

.desktop-menu-div {
  height: var(--vt-nav-height);
}

#navbar-ul {
  height: 35px;
}

.sub-menu {
  position: absolute;
  top: 60%;
}

.sub-menu li {
  padding: 10px;
}

.VPNavScreenAppearance {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  /* padding: 12px 14px 12px 16px; */
  /* background-color: var(--vt-c-bg-soft); */
  transition: background-color 0.5s;
}

.text {
  line-height: 24px;
  font-size: 12px;
  font-weight: 500;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
}

/* NOTE: pt-3 does not work. pt-2 works, p-3 works */
.tailwind-sucks {
  padding-top: 12px;
}
</style>
