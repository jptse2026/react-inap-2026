const pilares = [
  {
    numero: "01",
    titulo: "Seguridad vial",
    descripcion: "Promover una circulación más segura y una conducción responsable.",
  },
  {
    numero: "02",
    titulo: "Servicio a la ciudadanía",
    descripcion: "Acercar información y trámites de tráfico de forma clara y accesible.",
  },
  {
    numero: "03",
    titulo: "Movilidad",
    descripcion: "Contribuir a una movilidad eficiente, responsable y sostenible.",
  },
];

export default function About() {
  return (
    <section className="about-page">
      <header className="about-hero">
        <div className="about-hero-copy">
          <p className="about-eyebrow">Conócenos</p>
          <h1>Trabajamos por una movilidad más segura</h1>
          <p>
            La Dirección General de Tráfico es el organismo de la Administración
            General del Estado que desarrolla políticas relacionadas con el
            tráfico, la circulación y la seguridad vial.
          </p>
        </div>
        <div className="about-emblem" aria-hidden="true">
          <span>DGT</span>
          <small>SEGURIDAD<br />Y MOVILIDAD</small>
        </div>
      </header>

      <section className="about-mission" aria-labelledby="about-mission-title">
        <p className="about-section-label">Nuestro compromiso</p>
        <h2 id="about-mission-title">Al servicio de las personas</h2>
        <p className="about-mission-intro">
          La seguridad vial y la atención a la ciudadanía son referencias
          fundamentales de la labor de la DGT.
        </p>
        <div className="about-pillars">
          {pilares.map(({ numero, titulo, descripcion }) => (
            <article className="about-pillar" key={numero}>
              <span className="about-pillar-number">{numero}</span>
              <h3>{titulo}</h3>
              <p>{descripcion}</p>
            </article>
          ))}
        </div>
      </section>

      <aside className="about-notice">
        <span className="about-notice-mark" aria-hidden="true">i</span>
        <p>
          <strong>Proyecto educativo.</strong> Esta página es una recreación
          informativa y no es un sitio oficial de la DGT.
        </p>
      </aside>
    </section>
  );
}