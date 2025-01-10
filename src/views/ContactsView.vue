<template>
  <div class="contacts">
    <h1>{{ $t('contacts.title') }}</h1>
    <img class="inline m-50" src="../assets/img/contacts.jpg" alt="" />
    <span class="px-20">
      <div class="text-left">
        <p><strong>BIKE SERVICE CORINALDO</strong><br />via Nevola, 5<br />60013 CORINALDO (AN)</p>
      </div>
    </span>
    <div class="text-left">
      <p>
        <span
          style="color: rgb(136, 136, 136); --darkreader-inline-color: #9d9488"
          data-darkreader-inline-color=""
          >Contatti</span
        >
      </p>
      <h4>Tel: +39 071 67 697</h4>
      <p>
        <span
          style="color: rgb(136, 136, 136); --darkreader-inline-color: #9d9488"
          data-darkreader-inline-color=""
          >Mail: </span
        ><a href="mailto:bikeservicecorinaldo@gmail.com">bikeservicecorinaldo@gmail.com</a>
      </p>
      <p>&nbsp;</p>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .contacts {
    padding-top: 10px;
  }
}
</style>
