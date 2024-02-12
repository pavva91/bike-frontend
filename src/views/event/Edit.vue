<script setup>
import { onBeforeRouteLeave } from 'vue-router'
const props = defineProps({
  event: {
    required: true
  },
  showExtra: {
    required: false
  }
})

var unsavedChanges = true

onBeforeRouteLeave((routeTo, routeFrom, next) => {
  if (unsavedChanges) {
    // if (true) {
    const answer = window.confirm('Do you really want to leave? You have unsaved changes')
    if (answer) {
      next()
    } else {
      next(false)
    }
  } else {
    next()
  }
})

</script>
<template>
  <p>Edit the event</p>
</template>
