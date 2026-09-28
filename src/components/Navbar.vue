<template>
  <div class="nav">
    <div class="logo">
      <div class="img">
        <img src="@/assets/imgs/cloud.png" alt="" />
      </div>
      <div class="name"><h1>Weather</h1></div>
    </div>
    <div class="links">
      <router-link to="/home">Home</router-link>
      <router-link to="/forecast">Forecast</router-link>
      <router-link to="/about">About</router-link>

    </div>
  </div>
</template>
<script setup>
const city = localStorage.getItem("city") || "";
</script>
<style>
.nav {
  width: 90%;
  margin: auto;
  background-color: rgba(255, 249, 249, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
}
.logo {
  display: flex;
  width: 30%;
  gap: 1rem;
  align-items: center;
}
.img {
  width: 13%;
}
.img img {
  width: 100%;
}
.links {
  display: flex;
  width: 22%;
  justify-content: space-between;
}
.links a {
  text-decoration: none;
  color: black;
  font-size: 20px;
}
@media screen and (max-width: 576px) {
  .nav {
    width: 100%;
    padding: 0.3rem 0.5rem;
  }
  .logo {
    width: 40%;
    gap: 0.5rem;
  }
  .img {
    width: 18%;
  }
  .name h1 {
    font-size: 18px;
  }
  .links {
    width: 50%;
  }
  .links a {
    font-size: 16px;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .nav {
    width: 100%;
    padding: 0.3rem 1rem;
  }
  .logo {
    width: 40%;
    gap: 0.5rem;
  }
  .img {
    width: 15%;
  }
  .name h1 {
    font-size: 20px;
  }
  .links {
    width: 35%;
  }
  .links a {
    font-size: 16px;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .nav {
    width: 100%;
    padding: 0.3rem 1.5rem;
  }
  .logo {
    width: 30%;
    gap: 0.5rem;
  }
  .img {
    width: 15%;
  }
  .name h1 {
    font-size: 24px;
  }
  .links {
    width: 28%;
  }
  .links a {
    font-size: 17px;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1240px) {
  .nav {
    padding: 0.5rem 1.5rem;
  }
  .logo {
    width: 33%;
    gap: 0.7rem;
  }
  .img {
    width: 15%;
  }
  .name h1 {
    font-size: 26px;
  }
  .links {
    width: 28%;
  }
  .links a {
    font-size: 19px;
  }
}
</style>
