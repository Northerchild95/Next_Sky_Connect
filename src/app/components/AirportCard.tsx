import Image from "next/image";
import { AirportCardProps } from "../interfaces";
import Link from "next/link";

const AirportCard: React.FC<AirportCardProps> = ({ airport }) => {
  return (
    <Link href={`/details/${airport.icao}`}>
      <div className="relative bg-gray-800 p-6 rounded-2xl flex justify-between items-center border-2 border-white h-[235px]">
        <div className="w-[70%]">
          <h2 className="font-bold text-lg text-white text-[20px] cursor-pointer hover:underline">
            {airport.name}
          </h2>
          <p className="text-gray-400 mb-5">{airport.city}</p>
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text text-3xl font-bold">{airport.region}</span>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-[30%] h-full">
          <Image
            src="/airplane.jpg"
            alt="Aeropuerto"
            fill
            sizes="100vw"
            className="object-cover opacity-40 rounded-r-2xl"
          />
        </div>
        <div className="absolute top-4 right-4 w-[55px] h-[55px] flex items-center justify-center shadow-md">
          <Image sizes="100vw" src="/airplane-icon.png" alt="" />
        </div>
      </div>
    </Link>
  );
};

export default AirportCard;
