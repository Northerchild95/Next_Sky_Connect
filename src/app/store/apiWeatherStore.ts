import { create } from "zustand";
import { WeatherState } from "../interfaces";

export const useWeatherStore = create<WeatherState>((set) => ({
  weather: {
    temperature: null,
    description: null,
    humidity: null,
    windSpeed: null,
  },
  loading: false,
  error: null,

  fetchWeather: async (city) => {
    set({ loading: true, error: null });

    try {
      const apiKey = "47e410409633a41376e90bec6394d40d";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );

      if (!response.ok) throw new Error("Error al obtener el clima");

      const data = await response.json();

      set({
        weather: {
          temperature: data.main.temp,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
        },
        loading: false,
      });
    } catch {
      set({ error: "No se pudo obtener el clima", loading: false });
    }
  },
}));
