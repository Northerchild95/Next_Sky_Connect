import React from 'react'
import { GeneralProps } from '../interfaces'
import { Info } from 'lucide-react'
import Image from 'next/image'



const General: React.FC<GeneralProps> = ({ icao, iata, country, city }) => {
  return (
  
    <div className="relative bg-gray-800 p-6 rounded-2xl flex justify-between items-center border-2 border-white">
            {/* Contenedor de Información */}
            <div className="w-[70%]">
              <h2 className="flex items-center gap-2 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text text-3xl font-bold mb-8">
                <Info className="w-[55px] h-[55px] text-white mr-2" />
                Información General
              </h2>
                <p className="text-white-400 mb-3"><span className="font-bold mr-2">Código IATA:</span> {iata}</p>
                <p className="text-white-400 mb-3"><span className="font-bold mr-2">Código ICAO:</span> {icao}</p>
                <p className="text-white-400 mb-3"><span className="font-bold mr-2">País: </span>{country}</p>
                <p className="text-white-400 mb-3"><span className="font-bold mr-2">Ciudad:</span> {city}</p>
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
            

  
  )
}

export default General
