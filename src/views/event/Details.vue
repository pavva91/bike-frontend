<script setup>
const props = defineProps({
  event: {
    required: true
  },
  showExtra: {
    required: false
  }
})
</script>
<template>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.descritpion }}</p>
    <div v-show="showExtra === 'true'">More Stuff</div>
</template>

