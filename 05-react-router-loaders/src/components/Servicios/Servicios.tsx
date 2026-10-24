const servicios = [
  {
    icono: "🚘",
    nombre: "Trámites de vehículos",
    descripcion: "Matriculación, transferencia, baja y consulta de información de vehículos.",
  },
  {
    icono: "🪪",
    nombre: "Permiso de conducir",
    descripcion: "Renovación, duplicados y consulta del estado del permiso.",
  },
  {
    icono: "📋",
    nombre: "Multas",
    descripcion: "Consulta y pago de sanciones, además de identificación de la persona conductora.",
  },
  {
    icono: "⭐",
    nombre: "Puntos del permiso",
    descripcion: "Consulta del saldo de puntos y de los cursos de recuperación.",
  },
  {
    icono: "💳",
    nombre: "Pago de tasas",
    descripcion: "Consulta y pago de tasas relacionadas con trámites de tráfico.",
  },
  {
    icono: "📅",
    nombre: "Cita previa",
    descripcion: "Solicitud y gestión de citas en las jefaturas de Tráfico.",
  },
  {
    icono: "🔎",
    nombre: "Informes de vehículos",
    descripcion: "Solicitud de informes para conocer datos administrativos de un vehículo.",
  },
  {
    icono: "🛡️",
    nombre: "Educación y seguridad vial",
    descripcion: "Acceso a información y recursos sobre circulación segura.",
  },
];

export default function Servicios() {
  return (
    <section className="services-page">
      <header className="services-hero">
        <p className="services-eyebrow">Atención a la ciudadanía</p>
        <h1>Servicios de tráfico</h1>
        <p>
          Encuentra información sobre trámites y recursos relacionados con
          vehículos, permisos de conducir y seguridad vial.
        </p>
      </header>

      <div className="services-heading">
        <p className="about-section-label">¿En qué podemos ayudarte?</p>
        <h2>Trámites y servicios</h2>
      </div>

      <div className="services-grid">
        {servicios.map(({ icono, nombre, descripcion }, index) => (
          <article className="service-card" key={nombre}>
            <div className="service-card-top">
              <span className="service-icon" aria-hidden="true">{icono}</span>
              <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
          </article>
        ))}
      </div>

      <aside className="services-notice">
        <span className="about-notice-mark" aria-hidden="true">i</span>
        <p>
          <strong>Información de demostración.</strong> Esta página no ofrece
          trámites reales ni pertenece al sitio oficial de la DGT.
        </p>
      </aside>
    </section>
  );
}