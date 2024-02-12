<script setup>
import { useRouter } from 'vue-router'
import { inject } from 'vue'
const router = useRouter()
const GStore = inject('GStore')
const props = defineProps({
  event: {
    required: true
  },
  showExtra: {
    required: false
  }
})

function register() {
  GStore.flashMessage = 'You are successfully registered for ' + props.event.title

  setTimeout(() => {
    GStore.flashMessage = ''
  }, 3000)

  router.push({
    name: 'EventDetails',
    params: { id: props.event.id }
  })
}
</script>
<template>
  <p>Register for the event</p>
  <button @click="register">Register Me</button>
</template>
