<script setup>
import { onMounted, ref } from 'vue'
import EventService from '../services/EventService.js'
const event = ref(null)
const props = defineProps({
  resource: {
    type: String,
    required: true,
    default: 'page'
  },
  showExtra: {
    type: Boolean,
    required: false
  }
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
    <h1>404 - Not Found</h1>
    <h3>The {{ resource }} you are looking for is not here</h3>
    <div v-if="showExtra">Show Extra Stuff</div>
    <RouterLink :to="{ name: 'EventList' }">Back to the home page</RouterLink>
  </div>
</template>

<style></style>
