
import { create } from "zustand";
import {  Airport, AirportState } from "../interfaces";


export const useAirportStore = create<AirportState>((set) => {
  const savedAirportHistory = typeof window !== "undefined" 
    ? JSON.parse(localStorage.getItem("airportHistory") || "[]") 
    : [];

  return {
    airports: [],
    loading: false,
    airportHistory: savedAirportHistory,

    fetchAirports: async (query, type = "name") => {
      set({ loading: true });

      try {
        const response = await fetch(`/api/airports?query=${query}&type=${type}`);
        if (!response.ok) throw new Error("Error en la API");

        const data = await response.json();
        set({ airports: data, loading: false });
      } catch (error) {
        console.error("Error buscando aeropuertos:", error);
        set({ airports: [], loading: false });
      }
    },

    addToHistory: (name) => {
      set((state) => {
        const newHistory = [...state.airportHistory, name];

        if (typeof window !== "undefined") {
          localStorage.setItem("airportHistory", JSON.stringify(newHistory));
        }

        return { airportHistory: newHistory };
      });
    },

    setAirports: (newAirports:Airport[]) => set({ airports: newAirports }),
  };
});

