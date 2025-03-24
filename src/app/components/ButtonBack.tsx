"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const ButtonBack = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex cursor-pointer items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition mb-4"
    >
      <ArrowLeft className="w-5 h-5" />
      Volver
    </button>
  );
};

export default ButtonBack;
