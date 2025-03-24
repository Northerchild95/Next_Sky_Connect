import { Search } from "lucide-react";
import { SearchBarProps } from "../interfaces";
import { useSearchAirports } from "../hooks/useSearchAirport";


const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery, handleSearch }) => {
  const { goBack } = useSearchAirports();

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4 items-center mt-4 mb-[80px]">
      <h1 
        onClick={goBack} 
        className="text-4xl cursor-pointer sm:text-6xl font-bold bg-gradient-to-r from-[#006AFF] to-[#00F9FF] text-transparent bg-clip-text text-center sm:text-left"
      >
        SkyConnect Explorer
      </h1>

      <input
        type="text"
        placeholder="Buscar aeropuertos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-white w-full sm:w-[65%] px-4 py-3 rounded-full 
          border-none text-black focus:outline-none shadow-md 
          text-left placeholder:text-blue-400 mt-4 sm:mt-0"
      />

      <button
        onClick={handleSearch}
        className="w-full sm:w-[200px] flex items-center justify-center px-6 py-2.5 
          bg-gradient-to-r from-[#006AFF] to-[#00F9FF] text-white font-bold 
          rounded-lg shadow-md hover:opacity-90 transition 
          border-2 border-white mt-4 sm:mt-0 cursor-pointer"
      >
        <Search className="w-5 h-5 mr-2" />
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
