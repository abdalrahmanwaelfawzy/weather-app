<template>
  <div class="form-wrapper">
    <form @submit.prevent>
      <input
        type="text"
        :value="cityStore.city"
        @input="onInput"
        placeholder="Find your location..."
        class="search-input"
      />
    </form>
  </div>
</template>
<script setup>
import { useCityStore } from '@/stores/cityStore';
const cityStore = useCityStore();

function onInput(e) {
  cityStore.setCity(e.target.value);
}
</script>
<style scoped>
.form-wrapper {
  display: flex;
  align-items: center;
  position: relative;
  width: 50%;
  margin: auto;
  background-color: #000000;
  margin-bottom: 3rem;
  margin-top: 3rem;
  border-radius: 3rem;
}
.form-wrapper form {
  width: 100%;
}
.search-input {
  width: 100%;
  padding: 1rem 2rem;
  font-size: 18px;
  border: none;
  background-color: transparent;
  color: white;
}
input:focus {
  outline: none;
}
@media screen and (max-width: 576px) {
  .form-wrapper {
    width: 90%;
    margin-bottom: 1rem;
    margin-top: 2.5rem;
  }
  .search-input {
    padding: 0.5rem 1rem;
    font-size: 14px;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .form-wrapper {
    width: 90%;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
  }
  .search-input {
    padding: 0.8rem 1.5rem;
    font-size: 16px;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .form-wrapper {
    width: 60%;
    margin-bottom: 2rem;
    margin-top: 1.5rem;
  }
}
</style>
