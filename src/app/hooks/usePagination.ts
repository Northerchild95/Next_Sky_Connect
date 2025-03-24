import { useState, useEffect } from "react";

// Interfaz para definir las propiedades del hook
interface UsePaginationProps<T> {
  data: T[]; // Lista de elementos a paginar
  itemsPerPage?: number; // Cantidad de elementos por página (opcional, por defecto 4)
}

// Hook genérico para manejar paginación
export const usePagination = <T,>({ data, itemsPerPage = 4 }: UsePaginationProps<T>) => {
  // Estado para almacenar la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Calcula el número total de páginas según la cantidad de datos
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // 🔄 Efecto: Reinicia la página a 1 cuando cambian los datos
  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  //  Función para cambiar de página con validación de rangos
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // 🔍 Extrae los datos de la página actual
  const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

 
  return {
    currentPage, 
    totalPages, 
    handlePageChange,
    paginatedData, 
  };
};
