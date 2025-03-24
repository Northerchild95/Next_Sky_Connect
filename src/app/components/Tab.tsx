import React from "react";
import { TabsProps } from "../interfaces";

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-around bg-[#343942] p-2 rounded-2xl mt-6 w-full">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`flex-1 cursor-pointer min-w-[45%] sm:min-w-[unset] px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-semibold rounded-xl transition-all ${
            activeTab === tab
              ? "bg-blue-600 text-white shadow-lg"
              : "text-gray-300 opacity-75"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;