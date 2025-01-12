<script setup>
import { onMounted, ref } from 'vue'
import EventService from '../services/EventService.js'
const event = ref(null)
const props = defineProps({
  resource: {
    type: String,
    required: true,
    default: 'page',
  },
  showExtra: {
    type: Boolean,
    required: false,
  },
})
onMounted(() => {
  EventService.getEvent(props.id)
    .then((response) => {
      console.log(response.data)
      event.value = response.data
      console.log(event.value)
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>
<template>
  <div class="about">
    <h1>{{ $t('not-found.title') }}</h1>
    <p>{{ $t('not-found.text', { resource: props.resource }) }}</p>
    <div v-if="showExtra">{{ $t('not-found.extra-text') }}</div>
    <RouterLink :to="{ name: 'Home' }">{{ $t('not-found.back-home') }}</RouterLink>
  </div>
</template>

<style></style>
