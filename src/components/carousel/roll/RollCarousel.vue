<script setup lang="ts">
interface Item {
  img: string
  desc: string
  url: string
}

const props = defineProps<{
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
</script>

<template>
  <div class="roll-container">
    <div v-for="(item, index) in items" :key="index" class="single">
      <a :href="item.url">
        <img :src="item.img" :alt="item.desc" />
      </a>
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
  background-color: #333;
  padding: 10px;
}

.roll-container div {
  padding: 10px;
  width: 400px;
  height: 200px;
  margin-right: 5px;
}
</style>
