<!-- TODO: https://github.com/vuejs/theme/blob/main/src/core/components/VTSwitchAppearance.vue -->
<!-- TODO: https://vuejs.org/ -->
<script lang="ts" setup>
import { ref } from 'vue'
import VTSwitch from '../core/components/VTSwitch.vue'
import VTIconSun from '../core/components/icons/VTIconSun.vue'
import VTIconMoon from '../core/components/icons/VTIconMoon.vue'
// import { useConfig } from '../../vitepress/composables/config'

// const { config } = useConfig()

const storageKey = 'vitepress-theme-appearance'
const { isDark, toggle } =
  typeof localStorage !== 'undefined' ? useAppearance() : { isDark: false, toggle: () => {} }

function useAppearance() {
  let userPreference = localStorage.getItem(storageKey) || 'auto'
  const query = window.matchMedia(`(prefers-color-scheme: dark)`)
  const classList = document.documentElement.classList
  const isDark = ref(userPreference === 'auto' ? query.matches : userPreference === 'dark')
  const setClass = (dark: boolean) => classList[dark ? 'add' : 'remove']('dark')

  query.onchange = (e) => {
    if (userPreference === 'auto') {
      setClass((isDark.value = e.matches))
    }
  }

  const toggle = () => {
    setClass((isDark.value = !isDark.value))
    localStorage.setItem(
      storageKey,
      (userPreference = isDark.value
        ? query.matches
          ? 'auto'
          : 'dark'
        : query.matches
        ? 'light'
        : 'auto'),
    )
  }

  return { isDark, toggle }
}
</script>

<template>
  <!-- :aria-label="config.i18n?.ariaDarkMode ?? 'Toggle dark mode'" -->
  <VTSwitch class="vt-switch-appearance" :aria-checked="isDark" @click="toggle">
    <VTIconSun class="vt-switch-appearance-sun" />
    <VTIconMoon class="vt-switch-appearance-moon" />
  </VTSwitch>
</template>
