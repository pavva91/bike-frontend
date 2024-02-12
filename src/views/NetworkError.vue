<script setup>
</script>
<template>
  <div class="networkError">
    <h1>Network Error</h1>
    <h3>It looks like you're experiencing some network issues, take a breath and <a href="#" @click="$router.go(-1)">click here</a> to try again</h3>
    <div v-if="showExtra">Show Extra Stuff</div>
    <RouterLink :to="{ name: 'EventList' }">Back to the home page</RouterLink>
  </div>
</template>

<style></style>
