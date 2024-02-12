<script setup>
import { onMounted, ref } from 'vue'
import EventService from '../services/EventService.js'
const event = ref(null)
const props = defineProps({
  id: {
    required: true
  },
  showExtra: {
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
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.descritpion }}</p>
    <div v-show="showExtra === 'true'">More Stuff</div>
  </div>
</template>

