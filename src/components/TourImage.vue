<script setup>
import Rating4 from '../components/rating/Rating4.vue'
</script>
<template>
  <div class="tour-image">
    <img src="../assets/img/tours/route01.jpg" alt="image route" />
    <div class="bottom-left uppercase red light-pink">
      <h1>Marotta-Mondolfo</h1>
    </div>
    <div class="top-left">
      <p>
        <span>{{ $t('tours.image.share') }}</span>
      </p>
    </div>
    <div class="top-right">
      <p>
        <span>{{ $t('tours.image.distance') }}: 87km</span>
        <br />
        <span>{{ $t('tours.image.elevation') }}: 1500m</span>
        <br />
        <span>
          <Rating4></Rating4>
        </span>
      </p>
    </div>
    <!-- <div class="bottom-right">Bottom Right</div> -->
    <!-- <div class="centered">Centered</div> -->
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.tour-image div {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
}

.tour-image h1 {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 4rem;
  letter-spacing: 0.4px;
  padding-bottom: 3rem;
  padding-left: 2rem;
}

.tour-image {
  position: relative;
  text-align: center;
  color: white;
}

.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
  /* font-weight: 800; */
  text-align: left;
  /* top: 2rem; */
  /* right: 2rem; */
}

.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}

.top-right {
  position: absolute;
  /* top: 8px; */
  /* right: 16px; */
  top: 2rem;
  right: 2rem;
  text-align: right;
  font-weight: 300;
}

.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
