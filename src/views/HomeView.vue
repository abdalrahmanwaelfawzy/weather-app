<template>
  <SearchForm v-model="city" />
  <Results :city="city" />
</template>

<script setup>
import { watch, onMounted } from "vue";
import SearchForm from "@/components/HomePage/SearchForm.vue";
import Results from "@/components/HomePage/Results.vue";
import { storeToRefs } from "pinia";
import { useCityStore } from "@/stores/cityStore";
onMounted(() => {
  if (city.value) {
  }
});
const cityStore = useCityStore();
const { city } = storeToRefs(cityStore);
</script>
