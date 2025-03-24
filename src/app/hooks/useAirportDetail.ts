import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAirportStore } from "@/app/store/airportStore";

export const useAirportDetails = () => {
  // Obtiene el parámetro 'icao' de la URL
  const { icao } = useParams<{ icao?: string }>();

  // Accede al store global de aeropuertos
  const { airports, loading, fetchAirports } = useAirportStore();

  // Estado local para almacenar los detalles del aeropuerto actual
  const [airport, setAirport] = useState<typeof airports[0] | null>(null);

  //  Efecto: Busca el aeropuerto si 'icao' está definido
  useEffect(() => {
    if (icao && typeof icao === "string") {
      fetchAirports(icao, "icao"); // Llama a la API para obtener los datos
    }
  }, [icao, fetchAirports]);

  //  Efecto: Actualiza el estado 'airport' cuando se obtienen los datos
  useEffect(() => {
    if (airports.length > 0) {
      setAirport(airports[0]); // Toma el primer resultado de la búsqueda
    }
  }, [airports]);

  // Retorna el aeropuerto encontrado y el estado de carga
  return { airport, loading };
};
