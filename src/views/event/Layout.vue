<script setup>
import { onMounted, ref } from 'vue'
import EventService from '../../services/EventService.js'
import { useRouter } from 'vue-router'
const router = useRouter()

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
      if (error.response && error.response.status == 404) {
        router.push({
          name: '404Resource',
          params: { resource: 'event' }
        })
      } else {
        router.push({
          name: 'NetworkError'
        })
      }
    })
})
</script>
<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'EventDetails' }">Details</router-link>
      |
      <router-link :to="{ name: 'EventRegister' }">Register</router-link>
      |
      <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
    </div>
    <router-view :event="event" />
  </div>
</template>
