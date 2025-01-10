<template>
  <div class="background-image">
    <div class="bg-text">
      <div class="bg-top josefin-sans-bg">{{ $t('company') }}</div>
      <div class="bg-title lobster-regular">{{ $t('mission') }}</div>
      <div class="bg-bottom josefin-sans-bg">in viaggio verso la natura straordianria</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.bg-text {
  color: var(--vt-c-white);
  margin-left: auto;
  margin-right: auto;
}

.bg-title {
  font-size: 120px;
  line-height: 127px;
  letter-spacing: 3px;
}

.background-image {
  /* The image used */
  background: url('https://kilometroinverso.com/wp-content/uploads/2023/02/kilometro-inverso-trekking-toscana.jpg')
    no-repeat center center fixed;

  /* Full height minus menu */
  height: calc(100vh - var(--vt-nav-height));

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;

  display: flex;
  align-items: center;
  height: 100vh; /* or a fixed height */
  mask: linear-gradient(to top, transparent, 30%, white);
  mask-repeat: no-repeat;
}

@media (max-width: 480px) {
  .background-image {
    mask: linear-gradient(to top, transparent, 10%, white);
    mask-repeat: no-repeat;
  }

  .bg-title {
    font-size: 80px;
    line-height: 80px;
    letter-spacing: 1px;
  }
}

@media (max-width: 1024px) {
  .background-image {
    height: calc(100vh - var(--vt-nav-mobile-height));
  }
}
</style>
