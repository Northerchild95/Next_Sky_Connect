import { useEffect } from "react";
import { useWeatherStore } from "../store/apiWeatherStore";
import { useAirportDetails } from "../hooks/useAirportDetail";
import { Cloud } from "lucide-react";
import Image from "next/image";

const Weather = () => {
  const { weather, loading, error, fetchWeather } = useWeatherStore();
  const { airport } = useAirportDetails(); // Obtenemos la ciudad del store de aeropuertos

  useEffect(() => {
    if (airport?.city) {
      fetchWeather(airport.city); // Llamamos a la API con la ciudad del aeropuerto
    }
  }, [airport?.city, fetchWeather]);

  return (
    <div className="relative bg-gray-800 p-6 rounded-2xl flex justify-between items-center border-2 border-white h-[274px] mb-[50px]">
      {/* Contenedor de Información */}
      <div className="w-[70%]">
      <h2 className="flex items-center gap-2 text-blue-400 text-3xl font-bold mb-8">
        <Cloud className="w-[55px] h-[55px] text-white" />
        Clima Actual
      </h2>

        {loading && <p className="text-white">Cargando clima...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && weather.temperature !== null && (
          <div className="text-white">
            <p><span className="font-bold mr-2">Temperatura:</span>{weather.temperature}°C</p>
            <p><span className="font-bold mr-2">Descripción:</span>{weather.description}</p>
            <p><span className="font-bold mr-2">Humedad:</span>{weather.humidity}%</p>
            <p><span className="font-bold mr-2">Viento:</span>{weather.windSpeed} m/s</p>
          </div>
        )}
      </div>

      {/* Contenedor de la imagen (30%) */}
      <div className="w-[30%] h-full absolute right-0 top-0 bottom-0">
        <Image
            src="/airplane.jpg"
            alt="Aeropuerto"
            fill
            sizes="100vw"
            className="object-cover opacity-40 rounded-r-2xl"
        />
      </div>
    </div>
  );
};

export default Weather;
