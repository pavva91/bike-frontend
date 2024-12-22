<!-- INFO: https://github.com/vuejs/theme/blob/main/src/core/components/VTSwitchAppearance.vue -->
<!-- INFO: https://vuejs.org/ -->
<!-- INFO: ~/personal/vuetheme/theme/src/core/components/VTSwitchAppearance.vue -->

<script lang="ts" setup>
import { ref } from 'vue'
import VTSwitch from './VTSwitch.vue'
import VTIconSun from './icons/VTIconSun.vue'
import VTIconMoon from './icons/VTIconMoon.vue'

const storageKey = 'theme-appearance'

const isDark = typeof localStorage !== 'undefined' ? useAppearance() : true

function useAppearance() {
  let userPreference = localStorage.getItem(storageKey) || 'dark'
  const query = window.matchMedia(`(prefers-color-scheme: dark)`)
  const classList = document.documentElement.classList
  const isDark = ref(userPreference === 'dark')
  if (userPreference === 'dark') {
    classList['add']('dark')
  }
  return isDark
}

function toggle() {
  const classList = document.documentElement.classList
  let userPreference = localStorage.getItem(storageKey) || 'dark'
  isDark.value = !isDark.value
  switch (isDark.value) {
    case true:
      userPreference = 'dark'
      classList['add']('dark')
      break
    case false:
      userPreference = 'light'
      classList['remove']('dark')
      break

    default:
      userPreference = 'dark'
      classList['add']('dark')
      break
  }

  localStorage.setItem(storageKey, userPreference)
}
</script>

<template>
  <VTSwitch class="vt-switch-appearance" :aria-checked="isDark" @click="toggle()">
    <VTIconSun class="vt-switch-appearance-sun" />
    <VTIconMoon class="vt-switch-appearance-moon" />
  </VTSwitch>
</template>
