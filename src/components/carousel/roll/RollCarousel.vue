<script setup lang="ts">
interface Item {
  img: string
  desc: string
  id: number
  type: string
}

const props = defineProps<{
  items: Item[]
  withMaskGradient: {
    type: Boolean
    required: false
    default: false
  }
}>()

const items = props.items
</script>

<template>
  <div class="roll-container" :class="{ 'mask-gradient': props.withMaskGradient }">
    <div v-for="(item, index) in items" :key="index" class="single">
      <RouterLink :to="{ name: 'Tours', params: { type: item.type, id: item.id } }">
        <img :src="item.img" :alt="item.desc" />
      </RouterLink>
      <div>{{ item.desc }}</div>
    </div>
  </div>
</template>

<style>
.mask-gradient {
  mask: radial-gradient(circle, white, transparent);
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
  min-height: 135px;
}

.roll-container img {
  width: 100%;
  height: 85%;
}

.roll-container div {
  padding: 4px;
  width: 400px;
  height: 200px;
}

@media (max-width: 768px) {
  .roll-container div {
    width: 300px;
    height: 150px;
  }
}

@media (max-width: 480px) {
  .roll-container div {
    width: 250px;
    height: 125px;
  }
}

.single:hover {
  opacity: 0.6;
}
</style>
