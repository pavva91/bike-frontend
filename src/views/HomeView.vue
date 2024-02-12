<template>
  <section>
    <div :style="image" class="image">
      <h1>This is a home page</h1>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      image: { backgroundImage: 'url(https://via.placeholder.com/150)' }
    }
  }
}
</script>

<style>
.image {
  height: 150px;
  background-repeat: no-repeat;
}
</style>
