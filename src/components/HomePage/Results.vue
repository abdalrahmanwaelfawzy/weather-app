
<template>
  <div class="cards-container" v-if="forecast.length">
    <div v-for="(item, index) in forecast" :key="index" class="card">
      <h3>
        {{
          new Date(item.dt_txt).toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
          })
        }}
      </h3>
      <h1 class="city-name">{{ cityNameFromApi }}</h1>
      <div class="temp">
        <h2>{{ item.main.temp }}°C</h2>
        <img
          :src="`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`"
        />
      </div>
      <p class="desc">{{ item.weather[0].description }}</p>
      <div class="Probabilities">
        <div class="pop">
          <i class="fa-solid fa-umbrella"></i>
          {{ (item.pop * 100).toFixed(0) }}%
        </div>
        <div class="wind">
          <i class="fa-solid fa-wind"></i>
          {{ item.wind.speed }}kph
        </div>
      </div>
    </div>
  </div>

  <div v-if="error" class="error">{{ error }}</div>
</template>

<script setup>
import { ref, watch } from "vue";
import debounce from "lodash.debounce";
import { fetchFromWeather } from "@/services/api.js";

const props = defineProps(["city"]);

const forecast = ref([]);
const error = ref(null);
const cityNameFromApi = ref("");

const getForecast = async (cityName) => {
  if (!cityName || cityName.length < 3) {
    forecast.value = [];
    error.value = null;
    cityNameFromApi.value = "";
    return;
  }
  const data = await fetchFromWeather("forecast", { q: cityName });

  if (data.cod === "404" || !data.list) {
    forecast.value = [];
    error.value = "Not found";
    return;
  }
  cityNameFromApi.value = data.city.name;

  const today = new Date().toISOString().split("T")[0];

  const todayForecasts = data.list.filter((item) =>
    item.dt_txt.startsWith(today)
  );

  forecast.value = todayForecasts.slice(0, 3);
  error.value = null;
};

const debouncedFetch = debounce(getForecast, 700);

watch(
  () => props.city,
  (newVal) => {
    debouncedFetch(newVal);
  },
  { immediate: true }
);
</script>

<style scoped>
.cards-container {
  width: 80%;
  margin: auto;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.card {
  width: 30%;
  background-color: #323543;
  color: #c4c7d0;
  padding: 2rem 1rem;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
h3 {
  width: 80%;
  margin: auto;
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
  border-radius: 10px;
  text-align: center;
  color: white;
  background-color: #262a37;
}
.temp {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.temp img {
  width: 20%;
}
.temp h2 {
  font-weight: 500;
}
.desc {
  font-size: 18px;
  color: #3ba9e8;
  margin-bottom: 0.5rem;
}
.Probabilities {
  display: flex;
  gap: 1rem;
}
.pop,
.wind {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}
.error {
  color: red;
  text-align: center;
  margin-top: 2rem;
}
@media screen and (max-width: 576px) {
  .cards-container {
    width: 90%;
    margin-top: 1.5rem;
  }
  .card {
    width: 100%;
    padding: 1rem 1rem;
  }
  h3 {
    width: 80%;
    font-size: 14px;
    padding: 0.2rem 0;
  }
  h1 {
    font-size: 22px;
  }
  .temp h2 {
    font-size: 18px;
  }
  .desc {
    font-size: 15px;
  }
  .Probabilities {
    gap: 0.6rem;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .cards-container {
    width: 90%;
    margin-top: 1.5rem;
  }
  .card {
    width: 48%;
    padding: 1rem 1rem;
  }
  h3 {
    width: 80%;
    font-size: 14px;
    padding: 0.2rem 0;
  }
  h1 {
    font-size: 22px;
  }
  .temp h2 {
    font-size: 18px;
  }
  .desc {
    font-size: 15px;
  }
  .Probabilities {
    gap: 0.6rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .cards-container {
    width: 90%;
    gap: 0.7rem;
  }
  .card {
    width: 32.2%;
    padding: 1.5rem 1rem;
  }
  h3 {
    width: 80%;
    font-size: 17px;
    padding: 0.2rem 0;
  }
  h1 {
    font-size: 25px;
  }
  .temp h2 {
    font-size: 20px;
  }
  .temp img {
    width: 25%;
  }
  .desc {
    font-size: 16px;
  }
  .Probabilities {
    gap: 0.6rem;
  }
}
</style>
