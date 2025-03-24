import { render, screen } from "@testing-library/react";
import AirportTabsContent from "@/app/components/AirportTabsContent";
import { airportProps, Airport } from "@/app/interfaces";
import { JSX } from "react";

// Mock de los componentes hijos para evitar errores
jest.mock("@/app/components/General", () => {
  const MockGeneral = (props: Airport) => (
    <div data-testid="general" data-props={JSON.stringify(props)}>General Component</div>
  );
  MockGeneral.displayName = "MockGeneral";
  return MockGeneral;
});

jest.mock("@/app/components/Ubication", () => {
  const MockUbication = () => <div data-testid="ubication">Ubication Component</div>;
  MockUbication.displayName = "MockUbication";
  return MockUbication;
});

jest.mock("@/app/components/TimeZone", () => {
  const MockTimeZone = () => <div data-testid="timezone">TimeZone Component</div>;
  MockTimeZone.displayName = "MockTimeZone";
  return MockTimeZone;
});

jest.mock("@/app/components/Weather", () => {
  const MockWeather = () => <div data-testid="weather">Weather Component</div>;
  MockWeather.displayName = "MockWeather";
  return MockWeather;
});


describe("AirportTabsContent", () => {
  const mockAirport: airportProps["airport"] = {
    icao: "JFK",
    iata: "JFK",
    country: "USA",
    city: "New York",
    latitude: 40.6413,
    longitude: -73.7781,
    elevation_ft: 13,
    name: "John F. Kennedy International Airport",
    timezone: "America/New_York",
    region: "NY",
  };

  it("debe renderizar el componente General correctamente", () => {
    const components = AirportTabsContent({ airport: mockAirport });

    render(components.General as JSX.Element);
    expect(screen.getByTestId("general")).toBeInTheDocument();
  });
  

  it("debe manejar correctamente cuando las propiedades de 'General' están vacías", () => {
    const mockAirport = {
      icao: null,
      iata: null,
      country: null,
      name: "",
      region: "",
      latitude: 0,
      longitude: 0,
      elevation_ft: 0,
      timezone: "",
    };
  
    const components = AirportTabsContent({ airport: mockAirport as unknown as Airport });
  
    render(components.General as JSX.Element);
  
    const generalComponent = screen.getByTestId("general");
    expect(generalComponent).toBeInTheDocument();
  
    const props = JSON.parse(generalComponent.getAttribute("data-props") || "{}");
    expect(props.icao).toBe("");
    expect(props.iata).toBe("");
    expect(props.country).toBe("");
    expect(props.city).toBe("");
  });

  it("debe renderizar el componente Ubication correctamente", () => {
    const components = AirportTabsContent({ airport: mockAirport });

    render(components.Ubicación as JSX.Element);
    expect(screen.getByTestId("ubication")).toBeInTheDocument();
  });
    
  it("debe mostrar 'Cargando...' cuando airport es undefined", () => {
    const components = AirportTabsContent({ airport: null });
  
    render(components.General as JSX.Element);
    expect(screen.getByText("Cargando...")).toBeInTheDocument();
  });
  
  it("debe renderizar el componente TimeZone correctamente", () => {
    const components = AirportTabsContent({ airport: mockAirport });

    render(components["Zona Horaria"] as JSX.Element);
    expect(screen.getByTestId("timezone")).toBeInTheDocument();
  });

  it("debe renderizar el componente Weather correctamente", () => {
    const components = AirportTabsContent({ airport: mockAirport });

    render(components.Clima as JSX.Element);
    expect(screen.getByTestId("weather")).toBeInTheDocument();
  });

  it("debe mostrar 'Cargando...' si no hay datos del aeropuerto", () => {
    const components = AirportTabsContent({ airport: null });

    render(components.General as JSX.Element);
    expect(screen.getByText("Cargando...")).toBeInTheDocument();
  });

  it("debe devolver un objeto con todas las claves esperadas", () => {
    const components = AirportTabsContent({ airport: mockAirport });
  
    expect(components).toHaveProperty("General");
    expect(components).toHaveProperty("Ubicación");
    expect(components).toHaveProperty("Zona Horaria");
    expect(components).toHaveProperty("Clima");
  });
  
});
