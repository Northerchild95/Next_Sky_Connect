import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";

import { useSearchAirports } from "@/app/hooks/useSearchAirport";
import { useAirportStore } from "@/app/store/airportStore";
import Page from "@/app/page";

// Mock del hook para evitar llamadas a la API real
jest.mock("@/app/hooks/useSearchAirport", () => ({
  useSearchAirports: jest.fn(),
}));

jest.mock("@/app/store/airportStore", () => ({
  useAirportStore: jest.fn(() => ({
    addToHistory: jest.fn(),
  })),
}));

describe("Page Component", () => {
  let setQueryMock: jest.Mock;
  let handleSearchMock: jest.Mock;
  let addToHistoryMock: jest.Mock;

  beforeEach(() => {
    setQueryMock = jest.fn();
    handleSearchMock = jest.fn();
    addToHistoryMock = jest.fn();

    (useSearchAirports as jest.Mock).mockReturnValue({
      query: "",
      setQuery: setQueryMock,
      handleSearch: handleSearchMock,
      airports: [],
      loading: false,
    });

    (useAirportStore as unknown as jest.Mock).mockReturnValue({
      addToHistory: addToHistoryMock,
    });
  });

  it("debe renderizar el título correctamente", () => {
    (useSearchAirports as jest.Mock).mockReturnValue({
      query: "",
      setQuery: jest.fn(),
      handleSearch: jest.fn(),
    });

    render(<Page />);
    expect(screen.getByText(/SkyConnect Explorer/i)).toBeInTheDocument();
  });

  it("debe permitir escribir en el input de búsqueda", () => {
    const setQueryMock = jest.fn();
    (useSearchAirports as jest.Mock).mockReturnValue({
      query: "",
      setQuery: setQueryMock,
      handleSearch: jest.fn(),
    });

    render(<Page />);

    const input = screen.getByPlaceholderText(/buscar aeropuertos/i);
    fireEvent.change(input, { target: { value: "JFK" } });

    expect(setQueryMock).toHaveBeenCalledWith("JFK");
  });

  it("debe ejecutar la búsqueda al hacer clic en el botón", async () => {
    handleSearchMock.mockResolvedValue([{ name: "JFK Airport", code: "JFK" }]);

    render(<Page />);
    const button = screen.getByRole("button", { name: /buscar/i });

    await act(async () => {
      fireEvent.click(button);
    });

    expect(handleSearchMock).toHaveBeenCalledTimes(1);
  });


  it("debe mostrar mensaje de error si no hay resultados", async () => {
    handleSearchMock.mockResolvedValue([]); // Simulamos una búsqueda sin resultados

    render(<Page />);
    const button = screen.getByRole("button", { name: /buscar/i });

    await act(async () => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(screen.getByText(/no se encontraron aeropuertos/i)).toBeInTheDocument();
    });
  });

  it("no debe agregar al historial si no hay resultados", async () => {
    handleSearchMock.mockResolvedValue([]);

    render(<Page />);
    const button = screen.getByRole("button", { name: /buscar/i });

    await act(async () => {
      fireEvent.click(button);
    });

    expect(addToHistoryMock).not.toHaveBeenCalled();
  });

  
});
