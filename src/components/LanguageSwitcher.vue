<template>
  <div class="custom-select">
    <select
      name="language-picker-select"
      id="language-picker-select"
      v-model="$i18n.locale"
      @change="changeLanguage"
    >
      <option value="en">EN</option>
      <option value="it">IT</option>
      <option value="fr">FR</option>
      <option value="nl">NL</option>
    </select>
  </div>
</template>
<script>
export default {
  methods: {
    changeLanguage(obj) {
      localStorage.setItem('language', obj.target.value)
    }
  }
}
</script>

<style>
.custom-select select {
  float: right;
  border: 0Q;
  padding-top: 0Q;
  padding-bottom: 0Q;
}

@media (min-width: 1024px) {
  .custom-select {
    width: 200px;
  }
}
</style>
