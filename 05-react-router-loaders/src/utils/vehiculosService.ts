import type { Vehiculo } from "../interfaces/Vehiculo";
import { redirect } from "react-router-dom"

export async function getVehiculos(): Promise<Vehiculo[]> {
  const response = await fetch('/data/vehiculos.json');
  const data = await response.json();
  return data as Vehiculo[];
}

export async function vehiculosLoader() {
  const vehiculos = await getVehiculos();
  return { vehiculos }
}

export async function vehiculoDetalleLoader({ params }: { params: { matricula?: string } }) {
  const { matricula } = params;
  if (!matricula) throw redirect("/vehiculos"); // sin parámetro → redirige

  const vehiculos = await getVehiculos();
  const v = vehiculos.find(x => x.matricula === matricula);

  if (!v) {
    throw new Response("Vehículo no encontrado", { status: 404, statusText: "No encontrado" });
  }
  return { vehiculo: v };
}
