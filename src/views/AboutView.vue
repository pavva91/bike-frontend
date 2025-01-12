<template>
  <div class="about">
    <h1>{{ $t('about.title') }}</h1>
    <div class="img-container">
      <img class="inline m-50" src="../assets/img/about-us-1.jpg" alt="" />
    </div>
    <div class="about-text">
      <p v-html="$t('about.text')"></p>
    </div>
  </div>
</template>

<script setup></script>

<style>
@media (min-width: 1024px) {
  .about {
    width: 100%;
    padding-top: 10px;
  }

  .img-container {
    max-height: 400px;
    overflow: hidden;
  }

  .img-container img {
    width: 100%;
  }

  .about-text {
    margin-top: 30px;
    margin-left: 100px;
    margin-right: 100px;
    margin-bottom: 30px;
  }
}

@media (max-width: 1024px) {
  .about-text {
    margin-top: 20px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 20px;
  }
}
</style>
