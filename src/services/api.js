import axios from "axios";

const API_KEY = "390eafae08f2a2d10a728a55432713b3";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: API_KEY,
    units: "metric",
    lang: "en",
  },
});

export const fetchFromWeather = async (endpoint, extraParams = {}) => {
  const response = await api.get(endpoint, {
    params: {
      ...extraParams,
    },
  });
  return response.data;
};
