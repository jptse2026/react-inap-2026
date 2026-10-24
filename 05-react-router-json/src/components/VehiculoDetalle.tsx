import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import vehiculoDgt from "../assets/vehiculo-dgt.svg";
import Loading from "./Loading";
import type { Vehiculo } from "../interfaces/Vehiculo";
import { getVehiculos } from "../utils/vehiculosService";

export default function VehiculoDetalle() {
  const [vehiculo, setVehiculo] = useState<Vehiculo | null>(null);
  const [loading, setLoading] = useState(true);
  const { matricula } = useParams<{ matricula: string }>();

  useEffect(() => {

    let anulado = false;

    const timer = setTimeout(() => {

      getVehiculos()
          .then((vehiculos) => {
            if (anulado) 
              return; 
            setVehiculo(vehiculos.find((item) => item.matricula === matricula) ?? null);        
          })
          .catch((e: Error) => {
            if (anulado) return;
            console.log(e.message);
          })
          .finally(() => {
            if(anulado) return;
            setLoading(false)}
          );
    },2000);

    return () => {
      anulado = true;
      clearTimeout(timer);
    }
         

  }, [matricula]);

  if (loading) {
    return <Loading mensaje="Cargando detalles del vehiculo..."/>;
  }

  return (
    <section className="vehicle-card">
      <div className="vehicle-card-heading">
        <div>
          <p className="vehicle-card-eyebrow">Dirección General de Tráfico · Demo</p>
          <h1>Ficha del vehículo</h1>
        </div>
        <span className="vehicle-card-mark" aria-label="Portal de Tráfico">DGT</span>
      </div>

      <div className="vehicle-card-main">
        <div className="vehicle-card-image">
          <img src={vehiculoDgt} alt="Ilustración de un vehículo en una carretera" />
        </div>
        <div className="vehicle-card-summary">
          <p className="vehicle-card-label">Matrícula</p>
          <p className="vehicle-plate">
            <span aria-hidden="true">E</span>
            {vehiculo?.matricula}
          </p>
          <h2>{vehiculo?.marca} {vehiculo?.modelo}</h2>
          <p>Color: <strong>{vehiculo?.color}</strong></p>
        </div>
      </div>

      <dl className="vehicle-card-details">
        <div>
          <dt>Marca</dt>
          <dd>{vehiculo?.marca}</dd>
        </div>
        <div>
          <dt>Modelo</dt>
          <dd>{vehiculo?.modelo}</dd>
        </div>
        <div>
          <dt>Color</dt>
          <dd>{vehiculo?.color}</dd>
        </div>
        <div>
          <dt>Seguro</dt>
          <dd>
            <span className={`vehicle-status ${vehiculo?.seguroEnVigor ? "is-valid" : "is-invalid"}`}>
              {vehiculo?.seguroEnVigor ? "En vigor" : "No consta en vigor"}
            </span>
          </dd>
        </div>
        <div>
          <dt>Última ITV</dt>
          <dd>{vehiculo?.fechaUltimaITV}</dd>
        </div>
      </dl>

      <div className="vehicle-card-footer">
        <span>Información simulada para esta demostración.</span>
        <Link to="/vehiculos">Volver al listado</Link>
      </div>
    </section>
  );
}
