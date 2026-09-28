import { defineStore } from "pinia";

export const useCityStore = defineStore("city", {
  state: () => ({
    city: localStorage.getItem("city") || "",
  }),
  actions: {
    setCity(newCity) {
      this.city = newCity;
      localStorage.setItem("city", newCity);
    },
  },
});
