import type { Vehiculo } from "../interfaces/Vehiculo";

export async function getVehiculos(): Promise<Vehiculo[]> {
  const response = await fetch('/data/vehiculos.json');
  const data = await response.json();
  return data as Vehiculo[];
}
