<script setup></script>

<template>
  <div class="roll-container">
    <div class="single">
      <a href="#">
        <img src="../../assets/img/tours/gravel/gravel1.jpg" alt="" />
      </a>
      <div>Roma</div>
    </div>
    <div class="single">
      <a href="#">
        <img src="../../assets/img/tours/road/road1.jpg" alt="" />
      </a>
      <div>Milano</div>
    </div>
    <div class="single">
      <a href="#">
        <img src="../../assets/img/tours/mtb/mtb1.jpg" alt="" />
      </a>
      <div>Torino</div>
    </div>
    <div class="single">
      <a href="#">
        <img src="../../assets/img/tours/gravel/gravel1.jpg" alt="" />
      </a>
      <div>Bologna</div>
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
