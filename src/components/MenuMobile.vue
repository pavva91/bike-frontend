<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'

const showTours = ref(false)
const showMenu = ref(false)
</script>

<template>
  <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
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
        class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
      <div v-if="showMenu" class="w-full" id="navbar-hamburger">
        <ul
          class="items-center flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
        >
          <li>
            <LanguageSwitcher></LanguageSwitcher>
          </li>
          <li @click="showMenu = !showMenu">
            <RouterLink :to="{ name: 'Home' }">{{ $t('nav.home') }}</RouterLink>
          </li>
          <li @click="showMenu = !showMenu">
            <RouterLink :to="{ name: 'About' }">{{ $t('nav.about') }}</RouterLink>
          </li>
          <li @click="showMenu = !showMenu">
            <RouterLink :to="{ name: 'Contacts' }">{{ $t('nav.contacts') }}</RouterLink>
          </li>
          <li @click="showTours = !showTours">
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
