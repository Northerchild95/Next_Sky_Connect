export interface Airport {
    icao: string;
    iata: string;
    name: string;
    city: string;
    region: string;
    country: string;
    latitude: number;
    longitude: number;
    elevation_ft:number;
    timezone: string;
  }  

export interface airportProps {
  airport: Airport | null;
}  

export interface AirportState {
  airports: Airport[];
  loading: boolean;
  airportHistory: string[]; 
  fetchAirports: (query: string, type?: "name" | "icao" | "iata") => Promise<void>;
  addToHistory: (name: string) => void;
  setAirports: (newAirports: Airport[]) => void;
}

  
export interface AirportCardProps {
    airport: Airport;
  }

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    handlePageChange: (page: number) => void;
  }  

export interface GeneralProps {
  icao: string;
  iata: string;
  country: string;
  city: string;
}  

export interface UbicationProps {
  latitude: number;
  longitude: number;
  elevation_ft: number;
  name: string;
}

export interface timeZoneProps {
  timezone: string;
  region: string;
}

export interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
  handleSearch: () => void;
}

export interface TabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}


interface WeatherData {
  temperature: number | null;
  description: string | null;
  humidity: number | null;
  windSpeed: number | null;
}

export interface WeatherState {
  weather: WeatherData;
  loading: boolean;
  error: string | null;
  fetchWeather: (city: string) => Promise<void>;
}