import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAirportStore } from "@/app/store/airportStore";

// Hook para manejar la búsqueda de aeropuertos
export const useSearchAirports = (shouldRedirect = false) => {

  const [query, setQuery] = useState("");


  const { airports, loading, fetchAirports, setAirports } = useAirportStore();


  const router = useRouter();

  // 🔍 Función para realizar la búsqueda de aeropuertos
  const handleSearch = async () => {
    const { setAirports } = useAirportStore.getState();
  
    if (!query.trim()) {
      setAirports([]);  
      return [];
    }
  
    const formattedQuery = query.trim().toUpperCase(); 
    const searchType = /^[A-Z0-9]{4}$/.test(formattedQuery) ? "icao" : "name"; // Detectamos si es código ICAO o nombre
  
    await fetchAirports(formattedQuery, searchType);
  
    return useAirportStore.getState().airports; 
  };
  


  const goBack = () => {
    setAirports([]); 
    router.push("/"); 
  };

  // Efecto: Si hay resultados y `shouldRedirect` es `true`, redirige a la página de detalles
  useEffect(() => {
    if (shouldRedirect && airports.length > 0) {
      router.push("/details");
    }
  }, [airports, router, shouldRedirect]);

  // Retornamos los valores y funciones necesarias para la búsqueda
  return {
    query, 
    setQuery, 
    goBack, 
    handleSearch, 
    airports, 
    loading, 
  };
};
