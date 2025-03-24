
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { UbicationProps } from "../interfaces";
import { MapPin } from "lucide-react";
import Image from "next/image";


const markerIcon = new L.Icon({
  iconUrl: "/marker-icon.png", 
  iconSize: [41, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});



const Ubication: React.FC<UbicationProps> = ({ latitude, longitude, elevation_ft, name }) => {
  return (
    <div>
      <div className="relative bg-gray-800 p-6 rounded-2xl border-2 border-white">
      <div className="w-[70%]">
        <h2 className="flex items-center gap-2 text-blue-400 text-3xl font-bold mb-4">
          <MapPin className="w-[55px] h-[55px] text-white" />
          Ubicación
        </h2>
          <p className="text-white mb-2"><strong>Latitud:</strong> {latitude}</p>
          <p className="text-white mb-2"><strong>Longitud:</strong> {longitude}</p>
          <p className="text-white mb-2"><strong>Elevación:</strong> {elevation_ft} ft</p>
        </div>
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


      <div className="h-[400px] md:h-[600px] lg:h-[766px] w-full mt-4">
        <MapContainer center={[latitude, longitude]} zoom={10} className="h-full w-full rounded-xl">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[latitude, longitude]} icon={markerIcon}>
            <Popup>Aeropuerto {name} aquí</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Ubication;
