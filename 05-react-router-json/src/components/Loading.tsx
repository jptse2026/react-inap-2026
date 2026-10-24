interface Props  {
 readonly mensaje : string;
}
export default function Loading( { mensaje }: Props) {
  console.log(mensaje);
  return (
    <section
      className="vehicle-card vehicle-card-loading"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="vehicle-card-heading">
        <div>
          <p className="vehicle-card-eyebrow">Dirección General de Tráfico · Demo</p>
          <h1>{mensaje}</h1>
        </div>
        <span className="vehicle-card-mark" aria-hidden="true">DGT</span>
      </div>
    </section>
  );
}
