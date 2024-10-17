<script setup lang="ts">
interface Item {
  img: string
  desc: string
  id: number
}

const props = defineProps<{
  type: string
  items: Item[]
  noControls: {
    type: Boolean
    default: false
  }
  noIndicators: {
    type: Boolean
    default: false
  }
}>()

const items = props.items
const bikeType = props.type
</script>

<template>
  <div class="roll-container">
    <div v-for="(item, index) in items" :key="index" class="single">
      <RouterLink :to="{ name: 'Tours', params: { type: bikeType, id: item.id } }">
        <img :src="item.img" :alt="item.desc" />
      </RouterLink>
      <div>{{ item.desc }}</div>
    </div>
  </div>
</template>

<style>
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
}

.roll-container div {
  padding: 4px;
  width: 400px;
  height: 200px;
  /* margin-right: 5px; */
}

.single:hover {
  opacity: 0.6;
}
</style>
