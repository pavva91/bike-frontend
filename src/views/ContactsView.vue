<template>
  <div class="contacts">
    <h1>{{ $t('contacts.title') }}</h1>
    <img class="inline m-50" src="../assets/img/contacts.jpg" alt="" />
    <span class="px-20">
      <div class="text-left">
        <p>{{ $t('greeting', { name: 'DIO' }) }}</p>
        <p>
          <strong>{{ $t('company') }}</strong
          ><br />{{ $t('street') }}, {{ $t('number') }}<br />{{ $t('zipcode') }}
          {{ $t('city') }} ({{ $t('province') }})
        </p>
      </div>
    </span>
    <div class="text-left">
      <p>
        <span
          style="color: rgb(136, 136, 136); --darkreader-inline-color: #9d9488"
          data-darkreader-inline-color=""
          >{{ $t('contacts.title') }}</span
        >
      </p>
      <h4>Tel: {{ $t('phone') }}</h4>
      <p>
        <span
          style="color: rgb(136, 136, 136); --darkreader-inline-color: #9d9488"
          data-darkreader-inline-color=""
          >Mail: </span
        ><a href="mailto:biketouringsanconstanzo@gmail.com">biketouringsanconstanzo@gmail.com</a>
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
