<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { inject } from 'vue'
import { useUserStore } from './stores/UserStore.js'
const userStore = useUserStore()
const GStore = inject('GStore')
</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <!-- TODO: my logo -->
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Flowbite</span
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
            <RouterLink
              :to="{ name: 'Home' }"
              >Home</RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'about' }"
              >About</RouterLink
            >
          </li>
          <li>
            <RouterLink
              :to="{ name: 'Contacts' }"
              >Contacts</RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'EventList' }"
              >Events Pagination</RouterLink
            >
          </li>
          <li>
            <RouterLink
              :to="{ name: 'EventListPinia' }"
              >Events using store pinia</RouterLink
            >
          </li>
          <li>
            <RouterLink
              :to="{ name: 'EventCreate' }"
              >Create Event</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div id="layout">
    <div id="flashMessage" v-if="GStore.flashMessage">
      {{ GStore.flashMessage }}
    </div>
    <header>
      <div class="wrapper">
        <!-- <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> -->
        <nav>
          <!-- <nav class="bg-white border-gray-200 dark:bg-gray-900"> -->

          <!-- <RouterLink to="/">Events</RouterLink> | -->
          <!-- <RouterLink :to="{ name: 'EventList' }">Events Pagination</RouterLink> | -->
          <!-- <RouterLink :to="{ name: 'EventListPinia' }">Events using store pinia</RouterLink> | -->
          <!-- <RouterLink :to="{ name: 'about' }">About</RouterLink> | -->
          <!-- <RouterLink :to="{ name: 'EventCreate' }">Create Event</RouterLink> -->
          <p>(Store) Logged in as {{ userStore.user }}</p>
          <p>(Getter) Logged in as {{ userStore.firstName }}</p>
        </nav>
      </div>
    </header>
    <RouterView />
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
