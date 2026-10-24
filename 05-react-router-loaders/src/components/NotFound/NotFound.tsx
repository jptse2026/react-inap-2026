import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found-page" aria-labelledby="not-found-title">
      <div className="not-found-visual" aria-hidden="true">
        <span className="not-found-code">404</span>
        <div className="not-found-road">
          <span />
        </div>
        <span className="not-found-sign">FIN<br />DE RUTA</span>
      </div>

      <div className="not-found-copy">
        <p className="not-found-eyebrow">Error de navegación</p>
        <h1 id="not-found-title">Esta ruta no existe</h1>
        <p>
          No encontramos la página que buscas. Puede que la dirección haya
          cambiado o que el enlace no sea correcto.
        </p>
        <div className="not-found-actions">
          <Link className="home-button home-button-primary" to="/">
            Volver al inicio
          </Link>
          <Link className="not-found-secondary" to="/servicios">
            Explorar servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
