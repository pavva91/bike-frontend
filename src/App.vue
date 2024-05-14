<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { inject } from 'vue'
import FooterView from './views/FooterView.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'

const GStore = inject('GStore')
</script>

<template>
  <div class="header-wrapper">
    <nav class="bg-white border-gray-200 dark:bg-gray-900 fixed w-full">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="@/assets/menu_logo.png" class="h-8" alt="Flowbite Logo" />
          <!-- TODO: My company name -->
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Company name</span
          >
        </a>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-language"
        >
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <RouterLink :to="{ name: 'Home' }">{{ $t('nav.home') }}</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'About' }">{{ $t('nav.about') }}</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'Contacts' }">{{ $t('nav.contacts') }}</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'Tours' }">{{ $t('nav.tours') }}</RouterLink>
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
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
@keyframes yellowfade {
  from {
    background: Yellow;
  }

  to {
    background: transparent;
  }
}
</style>
