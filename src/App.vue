<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="app">
    <img src="@/assets/imgs/back.jpeg" class="bg-img">
    <Navbar/>
    <RouterView />
  </div>
</template>

<style scoped>
.bg-img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;       
  height: 100vh;       
  object-fit: fill;    
  z-index: -1;         
}
</style>
