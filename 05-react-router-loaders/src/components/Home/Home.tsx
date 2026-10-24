import { Link } from "react-router-dom";
import imagenVehiculo from "../../assets/vehiculo-dgt.svg";

export default function Home() {
  return (
    <section className="home-page">
      <div className="home-hero">
        <div className="home-intro">
          <p className="home-eyebrow">Movilidad segura, trámites sencillos</p>
          <h1>Bienvenido al Portal de Tráfico</h1>
          <p>
            Consulta información de vehículos y descubre algunos de los
            servicios relacionados con la circulación y la seguridad vial.
          </p>
          <div className="home-actions">
            <Link className="home-button home-button-primary" to="/servicios">
              Explorar servicios
            </Link>
            <Link className="home-button home-button-secondary" to="/vehiculos">
              Ver vehículos
            </Link>
          </div>
        </div>
        <figure className="home-image">
          <img
            src={imagenVehiculo}
            alt="Ilustración de un coche circulando por una carretera"
          />
          <figcaption>Una movilidad más segura empieza con buena información.</figcaption>
        </figure>
      </div>

      <div className="home-info">
        <h2>¿Qué puedes encontrar?</h2>
        <div className="home-cards">
          <article className="home-card">
            <span className="home-card-icon" aria-hidden="true">🚘</span>
            <h3>Información de vehículos</h3>
            <p>Consulta fichas de ejemplo con datos básicos de vehículos.</p>
            <Link to="/vehiculos">Ir al listado</Link>
          </article>
          <article className="home-card">
            <span className="home-card-icon" aria-hidden="true">🛣️</span>
            <h3>Servicios de tráfico</h3>
            <p>Conoce algunos trámites y recursos relacionados con la DGT.</p>
            <Link to="/servicios">Ver servicios</Link>
          </article>
          <article className="home-card">
            <span className="home-card-icon" aria-hidden="true">🛡️</span>
            <h3>Seguridad vial</h3>
            <p>La prevención y la conducción responsable ayudan a protegernos.</p>
            <Link to="/nosotros">Sobre este portal</Link>
          </article>
        </div>
      </div>

      <p className="home-disclaimer">
        Este sitio es una demostración educativa y no constituye un portal oficial de la DGT.
      </p>
    </section>
  );
}