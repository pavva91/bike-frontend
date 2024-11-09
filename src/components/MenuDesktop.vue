<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import VTSwitchAppearance from '../components/VTSwitchAppearance.vue'

const hover = ref(false)
</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 fixed w-full">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="@/assets/menu_logo.png" class="h-8" alt="Enterprise Logo" />
        <!-- TODO: My company name -->
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{
          $t('company')
        }}</span>
      </a>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-language"
      >
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <RouterLink :to="{ name: 'Home' }">{{ $t('nav.home') }}</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'Home', hash: '#about' }">{{ $t('nav.about') }}</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'Home', hash: '#contacts' }">{{
              $t('nav.contacts')
            }}</RouterLink>
          </li>
          <li @mouseover="hover = true" @mouseleave="hover = false">
            {{ $t('nav.tours') }}
            <ul class="sub-menu bg-white" v-if="hover">
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
  padding: 12px 14px 12px 16px;
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
</style>
