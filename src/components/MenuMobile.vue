<script setup>
import { RouterLink } from 'vue-router'
import { ref, onBeforeMount } from 'vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import VTSwitchAppearance from '../core/components/VTSwitchAppearance.vue'

const showTours = ref(false)
const showMenu = ref(false)
let initialImageSrc = ''
let userPreference = localStorage.getItem(storageKey) || 'dark'
const storageKey = 'theme-appearance'

const initLogo = () => {
  let userPreference = localStorage.getItem(storageKey) || 'dark'
  if (userPreference === 'light') {
    initialImageSrc = '/src/assets/menu_logo_white.png'
  } else {
    initialImageSrc = '/src/assets/menu_logo.png'
  }
}

const changeLogo = () => {
  let userPreference = localStorage.getItem(storageKey) || 'dark'
  if (userPreference === 'light') {
    document.getElementById('enterprise-logo').src = '/src/assets/menu_logo_white.png'
  } else {
    document.getElementById('enterprise-logo').src = '/src/assets/menu_logo.png'
  }
}

onBeforeMount(() => {
  initLogo()
})
</script>

<template>
  <nav class="mobile-navbar-nav fixed w-full">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <RouterLink
        @click="resetSelection()"
        :to="{ name: 'Home' }"
        class="flex items-center space-x-3 rtl:space-x-reverse monoton-regular"
      >
        <img id="enterprise-logo" :src="initialImageSrc" class="h-8" alt="Enterprise Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{
          $t('company')
        }}</span>
      </RouterLink>
      <div class="flex flex-wrap items-center justify-between gap-2">
        <button
          @click="showMenu = !showMenu"
          data-collapse-toggle="navbar-hamburger"
          type="button"
          class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-hamburger"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            v-if="!showMenu"
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
        </button>

        <div class="VPNavScreenAppearance" @click="changeLogo()">
          <VTSwitchAppearance></VTSwitchAppearance>
        </div>
      </div>

      <div v-if="showMenu" class="w-full" id="navbar-hamburger">
        <ul class="items-center flex flex-col font-medium mt-4 rounded-lg">
          <li>
            <LanguageSwitcher></LanguageSwitcher>
          </li>
          <li @click="showMenu = !showMenu">
            <RouterLink :to="{ name: 'Home' }">{{ $t('nav.home') }}</RouterLink>
          </li>
          <li @click="showMenu = !showMenu">
            <RouterLink :to="{ name: 'Home', hash: '#about' }">{{ $t('nav.about') }}</RouterLink>
          </li>
          <li @click="showMenu = !showMenu">
            <RouterLink :to="{ name: 'Home', hash: '#contacts' }">{{
              $t('nav.contacts')
            }}</RouterLink>
          </li>
          <li id="nav-tours-mobile" @click="showTours = !showTours">
            {{ $t('nav.tours') }}
            <ul v-if="showTours">
              <li>
                <RouterLink
                  @click="showMenu = !showMenu"
                  :to="{ name: 'Tours', params: { type: 'road', id: 1 } }"
                  >{{ $t('nav.types.road') }}
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  @click="showMenu = !showMenu"
                  :to="{ name: 'Tours', params: { type: 'mtb', id: 1 } }"
                  >{{ $t('nav.types.mtb') }}</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  @click="showMenu = !showMenu"
                  :to="{ name: 'Tours', params: { type: 'gravel', id: 1 } }"
                  >{{ $t('nav.types.gravel') }}
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.mobile-navbar-nav {
  background-color: var(--vt-c-bg);
}

#nav-tours-mobile {
  text-align: center;
}

li#nav-tours-mobile:hover {
  color: #b4003b;
}
</style>
