import General from "@/app/components/General";
import Ubication from "@/app/components/Ubication";
import TimeZone from "@/app/components/TimeZone";
import { airportProps } from "../interfaces";
import Weather from "@/app/components/Weather";


const AirportTabsContent = ({ airport }: airportProps) => {
  return {
    General: airport ? (
      <General
        icao={airport.icao ?? ""}
        iata={airport.iata ?? ""}
        country={airport.country ?? ""}
        city={airport.city ?? ""}
      />
    ) : (
      <p>Cargando...</p>
    ),
    Ubicación: (
      <Ubication
        latitude={airport?.latitude ?? 0}
        longitude={airport?.longitude ?? 0}
        elevation_ft={airport?.elevation_ft ?? 0}
        name={airport?.name ?? ""}
      />
    ),
    "Zona Horaria": (
      <TimeZone timezone={airport?.timezone ?? ""} region={airport?.region ?? ""} />
    ),
    Clima: <Weather />,
  };
};

export default AirportTabsContent;
