<template>
  <div class="background-image">
    <div class="bg-text">
      <div class="bg-top josefin-sans-bg">kilometro inverso</div>
      <div class="bg-title molle-regular-italic">Viaggi a piedi, trekking e biking</div>
      <div class="bg-bottom josefin-sans-bg">in viaggio verso la natura straordianria</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Molle&display=swap');
.molle-regular-italic {
  font-family: 'Molle', serif;
  font-weight: 400;
  font-style: italic;
}

/* <uniquifier>: Use a unique and descriptive class name */
/* <weight>: Use a value from 100 to 700 */

.josefin-sans-bg {
  font-family: 'Josefin Sans', serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
}

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

@media (max-width: 480px) {
}

.background-image {
  /* The image used */
  background: url('https://www.w3schools.com/howto/img_girl.jpg') no-repeat center center fixed;
  background: url('https://kilometroinverso.com/wp-content/uploads/2023/02/kilometro-inverso-trekking-toscana.jpg')
    no-repeat center center fixed;

  /* Full height */
  height: 100vh;

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
    height: 75vh;
    mask: linear-gradient(to top, transparent, 10%, white);
    mask-repeat: no-repeat;
  }

  .bg-title {
    font-size: 80px;
    line-height: 80px;
    letter-spacing: 1px;
  }
}
</style>
