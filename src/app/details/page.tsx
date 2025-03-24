"use client";

import { useSearchAirports } from "@/app/hooks/useSearchAirport";
import { usePagination } from "@/app/hooks/usePagination";
import SearchBar from "@/app/components/SearchBar";
import AirportCard from "@/app/components/AirportCard";
import Pagination from "@/app/components/Pagination";
import ErrorMessage from "@/app/components/ErrorMessage";
import { motion } from "framer-motion";

const Page = () => {
  const { query, setQuery, handleSearch, airports, loading } = useSearchAirports();
  const { currentPage, totalPages, handlePageChange, paginatedData: paginatedAirports } = usePagination({ data: airports });

  return (
    <div className="min-h-screen text-white p-6">
      <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />

      {loading ? (
        <p className="text-center text-white mt-10">Cargando...</p>
      ) : airports.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {paginatedAirports?.map((airport) => (
            <motion.div
              key={airport.icao}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <AirportCard airport={airport} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <ErrorMessage text="No se encontraron aeropuertos. Intenta otra búsqueda." color="text-white" />
      )}

      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
      )}
    </div>
  );
};

export default Page;
