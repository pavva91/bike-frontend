<script setup lang="ts">
import { onBeforeMount } from 'vue'

interface Item {
  img: string
  desc: string
  id: number
  type: string
}

const props = defineProps<{
  selectedTourId: {
    type: number
    required: false
    default: -1
  }
  items: Item[]
  withMaskGradient: {
    type: Boolean
    required: false
    default: false
  }
  withZoomIn: {
    type: Boolean
    required: false
    default: false
  }
  withShuffle: {
    type: Boolean
    required: false
    default: false
  }
}>()

const items = [...props.items]
const selectedTourId = props.selectedTourId

function shuffleArray(array) {
  return array.sort(() => 0.5 - Math.random())
}

onBeforeMount(() => {
  // NOTE: props.selectedTourId is undefined if it is not passed to the component
  if (props.selectedTourId || props.selectedTourId !== -1) {
    items.splice(selectedTourId - 1, 1)
    // NOTE: props.withShuffle is undefined if it is not passed to the component
  }
  if (props.withShuffle) {
    shuffleArray(items)
  }
})
</script>

<template>
  <div class="roll-container" :class="{ 'mask-gradient': props.withMaskGradient }">
    <div v-for="(item, index) in items" :key="index" class="single">
      <!-- TODO: remove tour that is open from the carousel (getRouter, v-if) -->
      <RouterLink :to="{ name: 'Tours', params: { type: item.type, id: item.id } }">
        <div
          class="common"
          :class="{ 'hover-zoom-in': props.withZoomIn, 'no-zoom': !props.withZoomIn }"
        >
          <img :src="item.img" :alt="item.desc" />
        </div>
      </RouterLink>
      <div>{{ item.desc }}</div>
    </div>
  </div>
</template>

<style>
.mask-gradient {
  mask: radial-gradient(circle, white, 80%, transparent);
  mask-repeat: no-repeat;
}

.roll-container {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  /* background-color: #333; */
  padding: 4px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  min-height: 150px;
}

.roll-container img {
  width: 100%;
  /* height: 85%; */
}

.single {
  padding: 4px;
  width: 400px;
  height: 200px;
}

.common {
  padding: 4px;
  width: 400px;
  height: 85%;
}

.hover-zoom-in {
  overflow: hidden;
}

.hover-zoom-in img {
  height: 100%;
  transition: transform 0.3s;
}

.hover-zoom-in:hover img {
  transform: scale(1.1);
}

.no-zoom img {
  height: 100%;
}

@media (max-width: 768px) {
  .single {
    width: 300px;
    height: 175px;
  }

  .common {
    width: 300px;
    height: 150px;
  }
}

@media (max-width: 480px) {
  .single {
    width: 250px;
    height: 155px;
  }

  .common {
    width: 250px;
    height: 125px;
  }
}

/* TODO: fix hover remains on mobile */
/* TODO: show click on mobile */
@media (min-width: 768px) {
  .hover-zoom-in:hover {
    opacity: 0.6;
  }

  .no-zoom:hover {
    opacity: 0.6;
  }
}
</style>
