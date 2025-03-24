"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { useSearchAirports } from "./hooks/useSearchAirport";
import { useAirportStore } from "./store/airportStore";
import ErrorMessage from "./components/ErrorMessage";

const Page = () => {
  const { query, setQuery, handleSearch, airports } = useSearchAirports(true);
  const { addToHistory } = useAirportStore();
  const [searched, setSearched] = useState(false);

  const handleSearchAndSaveHistory = async () => {
    const results = await handleSearch();
    setSearched(true);
  
    if (results.length > 0) {
      addToHistory(query);
    }
  };
  

  return (
    <div className="relative flex items-center justify-center min-h-screen">

      <div className="relative text-center text-white px-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text drop-shadow-lg sm:mb-[50px] md:mb-[140px] md:h-[140px]">
          SkyConnect Explorer
        </h1>

        <div className="mt-8 flex flex-col items-center w-full">
          <input
            type="text"
            placeholder="Buscar aeropuertos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-white w-full sm:w-[75%] px-4 py-3 rounded-full border-none text-black focus:outline-none shadow-md text-left pl-4 placeholder:text-blue-400"
          />

          <button
            onClick={handleSearchAndSaveHistory}
            className="mt-4 w-[200px] flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-[#006AFF] to-[#00F9FF]  text-white font-bold rounded-lg shadow-md hover:opacity-90 transition border-2 border-white cursor-pointer"
          >
            <Search className="w-5 h-5 mr-2" />
            Buscar
          </button>

          {searched && airports.length === 0 && (
            <ErrorMessage text="No se encontraron aeropuertos. Intenta otra búsqueda." color="text-[#ff4d4d]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
