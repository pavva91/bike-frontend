<script setup>
import EventService from '../services/EventService.js'
import EventCard from '../components/EventCard.vue';
import { useRouter } from 'vue-router'
import { onMounted, ref, watchEffect, computed } from 'vue';
import { useEventStore } from '../stores/EventStore.js';

const router = useRouter()
const events = ref(null)
const totalEvents = ref(0)
const eventStore = useEventStore()
const props = defineProps({
  page: {
    required: true
  }
})

onMounted(() => {

  eventStore.fetchEvents().catch(error => {
    router.push({
      name: 'NetworkError',
      params: { error: error }
    })
  })

})

const hasNextPage = computed(() => {
  var totalPages = Math.ceil((totalEvents.value) / 2)
  console.log(Math.ceil((totalEvents.value) / 2))
  if (totalPages === props.page) {
    return false
  } else {
    return true
  }
})

</script>

<template>
  <h1>{{ eventStore.numberOfEvents }} Events For Good</h1>

  <div class="events">
    <EventCard v-for="event in eventStore.events" :key="event.ID" :event="event" />
  </div>

</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
  margin-left: 530px
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
