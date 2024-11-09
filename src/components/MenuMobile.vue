<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import VTSwitchAppearance from '../core/components/VTSwitchAppearance.vue'

const showTours = ref(false)
const showMenu = ref(false)
</script>

<template>
  <nav class="mobile-navbar-nav">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="@/assets/menu_logo.png" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{
          $t('company')
        }}</span>
      </a>
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
      </button>

      <div class="VPNavScreenAppearance">
        <VTSwitchAppearance></VTSwitchAppearance>
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
