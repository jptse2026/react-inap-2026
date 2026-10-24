import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Vehiculo } from "../interfaces/Vehiculo";
import Loading from "./Loading";
import { getVehiculos } from "../utils/vehiculosService";

export default function Vehiculos() {
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {

        getVehiculos()
          .then((datos) => {
              setVehiculos(datos);
          })
          .catch((e: Error) => {
              console.log(e.message);
          })
          .finally(() => {
              setLoading(false);
          });
    }, 500);

  }, []);


  if (loading) {
    return <Loading mensaje="Cargando vehículos..." />;
  }


  return (
    <section className="vehicles-page">
      <header className="vehicles-hero">
        <p className="vehicles-eyebrow">Parque de vehículos</p>
        <h1>Consulta de vehículos</h1>
        <p>
          Explora las fichas de ejemplo para consultar la información básica de
          cada vehículo.
        </p>
      </header>

      <div className="vehicles-heading">
        <div>
          <p className="about-section-label">Listado</p>
          <h2>Vehículos registrados</h2>
        </div>
        {!loading && (
          <span className="vehicles-count">
            {vehiculos.length} {vehiculos.length === 1 ? "vehículo" : "vehículos"}
          </span>
        )}
      </div>


      {!loading && vehiculos.length > 0 && (
        <div className="vehicles-grid">
          {vehiculos.map((vehiculo) => (
            <Link
              className="vehicle-list-card"
              key={vehiculo.matricula}
              to={`/vehiculos/${vehiculo.matricula}`}
              aria-label={`Ver ficha de ${vehiculo.marca} ${vehiculo.modelo}, matrícula ${vehiculo.matricula}`}
            >
              <span className="vehicle-list-plate">{vehiculo.matricula}</span>
              <h3>{vehiculo.marca} {vehiculo.modelo}</h3>
            </Link>
          ))}
        </div>
      )}

      <aside className="vehicles-notice">
        <span className="about-notice-mark" aria-hidden="true">i</span>
        <p>
          Datos simulados para esta demostración educativa; no corresponden a
          consultas oficiales de la DGT.
        </p>
      </aside>
    </section>
  );
}
