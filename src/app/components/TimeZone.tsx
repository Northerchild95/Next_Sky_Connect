import React from 'react'
import { timeZoneProps } from '../interfaces'
import { Clock, Globe2 } from 'lucide-react'
import Image from 'next/image'


const TimeZone: React.FC<timeZoneProps> = ({ timezone, region, }) => {
  return (
    <div>
      <div className="relative bg-gray-800 p-6 rounded-2xl flex justify-between items-center border-2 border-white mb-[50px] h-[274px]">
            {/* Contenedor de Información */}
            <div className="w-[70%]">
                <h2 className="flex items-center gap-2 text-blue-400 text-3xl font-bold mb-8">
                <Clock className="w-[55px] h-[55px] text-white" />
                Zona Horaria
                </h2>
                <p className="text-white-400 mb-3"><span className="font-bold mr-2">Zona Horaria:</span>{timezone}</p>
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

        <div className="relative bg-gray-800 p-6 rounded-2xl flex justify-between items-center border-2 border-white h-[230px]">
            <div className="w-[70%]">
                <h2 className="flex items-center gap-2 text-blue-400 text-3xl font-bold mb-8">
                <Globe2 className="w-[55px] h-[55px] text-white" />
                Región
                </h2>
                <p className="text-white-400 mb-3"><span className="font-bold mr-2">Región:</span>{region}</p>
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
    </div>
  )
}

export default TimeZone
