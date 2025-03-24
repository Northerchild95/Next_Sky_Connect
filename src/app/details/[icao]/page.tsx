"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useAirportDetails } from "@/app/hooks/useAirportDetail";
import AirportTabsContent from "@/app/components/AirportTabsContent";
import ButtonBack from "@/app/components/ButtonBack";

const tabs = ["General", "Ubicación", "Zona Horaria", "Clima"];

const Page = () => {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("General");
  const { airport, loading } = useAirportDetails();
  const components = AirportTabsContent({ airport });

  return (
    <div className="min-h-screen text-white flex flex-col items-center p-6">
      <div className="self-start flex">
        <ButtonBack/>
      </div>

      <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
        {loading ? "Cargando..." : airport?.name || "No encontrado"}
      </h1>

      <div className="flex flex-wrap justify-center sm:justify-around bg-[#343942] p-2 rounded-2xl mt-6 w-full">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`flex-1 cursor-pointer min-w-[45%] sm:min-w-[unset] px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-semibold rounded-xl transition-all ${
              activeTab === tab ? "bg-blue-600 text-white shadow-lg" : "text-gray-300 opacity-75"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-8 w-full"
      >
        {components[activeTab as keyof typeof components]}
      </motion.div>
    </div>
  );
};

export default Page;
