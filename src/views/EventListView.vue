<script setup>
import EventService from '../services/EventService.js'
import EventCard from '../components/EventCard.vue';
import { useRouter } from 'vue-router'
import { onMounted, ref, watchEffect, computed } from 'vue';

const router = useRouter()
const events = ref(null)
const totalEvents = ref(0)
const props = defineProps({
  page: {
    required: true
  }
})

onMounted(() => {
  watchEffect(() => {
    EventService.getEvents(2, props.page)
      .then((response) => {
        events.value = response.data
        totalEvents.value = response.headers['x-total-count']
      })
      .catch((error) => {
        console.log(error)
        router.push({
          name: 'NetworkError'
        })
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
  <h1>Events For Good</h1>

  <div class="events">
    <EventCard v-for="event in events" :key="event.ID" :event="event" />
  </div>

  <div class="pagination">

    <router-link id="page-prev" :to="{ name: 'EventList', query: { page: page - 1 } }" rel="prev" v-if="page != 1">&#60;
      Previous</router-link>

    <router-link id="page-next" :to="{ name: 'EventList', query: { page: page + 1 } }" rel="next" v-if="hasNextPage">Next
      &#62;</router-link>

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
