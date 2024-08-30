<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a
          href="#"
          class="flex flex-wrap items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse logo-footer"
        >
          <!-- <img src="@/assets/menu_logo.png" class="h-8" alt="Flowbite Logo" /> -->
          <img src="@/assets/bikeservice.png" class="h-8" alt="Enterprise Logo" />
          <span
            class="logo-enterprise-name self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >{{ $t('company') }}</span
          >
        </a>
        <ul
          class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 mr-0 ml-auto footer-ul"
        >
          <li>
            <RouterLink class="hover:underline me-4 md:me-6" :to="{ name: 'About' }">{{
              $t('nav.about')
            }}</RouterLink>
          </li>
          <li>
            <!-- TODO: Create Privacy Policy View -->
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
            <!-- TODO: Create Licensing View -->
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <RouterLink class="hover:underline me-4 md:me-6" :to="{ name: 'Contacts' }">{{
              $t('nav.contacts')
            }}</RouterLink>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2024 <a href="https://flowbite.com/" class="hover:underline">Valerio Mattioli</a>. All
        Rights Reserved.</span
      >
    </div>
  </footer>
</template>

<style>
.footer-ul li {
  padding: 0.5rem;
  margin-left: auto;
  margin-right: auto;
}

.logo-footer img {
  margin-left: auto;
  margin-right: auto;
}

.logo-footer span {
  margin-left: auto !important;
  margin-right: auto !important;
}
</style>
