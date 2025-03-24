import { PaginationProps } from "../interfaces";

  
  const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, handlePageChange }) => {
    if (totalPages <= 1) return null;
  
    return (
      <div className="flex justify-center items-center gap-2 mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg cursor-pointer transition ${
            currentPage === 1 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Anterior
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded-lg border cursor-pointer border-gray-500 transition ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg cursor-pointer transition ${
            currentPage === totalPages ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Siguiente
        </button>
      </div>
    );
  };
  
  export default Pagination;
  