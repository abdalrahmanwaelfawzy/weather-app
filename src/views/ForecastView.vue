<template>
  <ForeCast />
</template>
<script setup>
import ForeCast from "@/components/ForecastPage/ForeCast.vue";
import { storeToRefs } from 'pinia'
import { useCityStore } from '@/stores/cityStore'

const cityStore = useCityStore()
const { city } = storeToRefs(cityStore)
</script>
