import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Vehiculos from "./components/Vehiculos/Vehiculos";
import VehiculoDetalle from "./components/VehiculoDetalle/VehiculoDetalle";
import { vehiculoDetalleLoader, vehiculosLoader } from "./utils/vehiculosService";

const MOCK_DATA = [
  { matricula: "1234ABC", marca: "Seat", modelo: "León", color: "Gris", seguroEnVigor: true,  fechaUltimaITV: "2024-06-10" },
  { matricula: "5678XYZ", marca: "Renault", modelo: "Clio", color: "Rojo", seguroEnVigor: false, fechaUltimaITV: "2023-11-02" },
];

function renderEn(ruta: string) {
  const router = createMemoryRouter(
    [
      {
        path: "/vehiculos",
        element: <Vehiculos />,
        loader: vehiculosLoader,
      },
      {
        path: "/vehiculos/:matricula",
        element: <VehiculoDetalle />,
        loader: vehiculoDetalleLoader,
        errorElement: <h1>404</h1>,
      },
    ],
    { initialEntries: [ruta] }
  );

  return render(<RouterProvider router={router} />);
}

beforeEach(() => {
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(MOCK_DATA),
    })
  );
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("React Router con componentes reales y fetch mockeado", () => {
  it("lista vehículos y navega al detalle", async () => {
    const user = userEvent.setup();
    renderEn("/vehiculos");
    
    // Espera a que la lista esté en el DOM (uno de los elementos)
    expect(await screen.findByText(/1234ABC/i, {}, { timeout: 2000 })).toBeInTheDocument();

    // Click en el enlace del primer vehículo
    await user.click(screen.getByRole("link", { name: /1234ABC/i }));

    // El detalle debe mostrar la matrícula y otros datos
    expect(await screen.findByText(/Detalle/i,{},{timeout : 2000})).toBeInTheDocument();
    expect(await screen.findByText(/1234ABC/i,{},{timeout : 2000})).toBeInTheDocument();
    expect(await screen.findByText(/Seat León/i,{},{timeout : 2000})).toBeInTheDocument();
  });

  it("muestra 404 si la matrícula no existe", async () => {
    renderEn("/vehiculos/0000AAA");

    // Como el detalle busca por matrícula y no la encuentra, debería aparecer el texto 404 del propio detalle
    expect(await screen.findByText(/404/i,{},{timeout : 2000})).toBeInTheDocument();
  });
});
