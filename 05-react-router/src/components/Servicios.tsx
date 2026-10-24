const servicios = [
  {
    nombre: "Trámites de vehículos",
    descripcion: "Matriculación, transferencia, baja y consulta de información de vehículos.",
  },
  {
    nombre: "Permiso de conducir",
    descripcion: "Renovación, duplicados y consulta del estado del permiso.",
  },
  {
    nombre: "Multas",
    descripcion: "Consulta y pago de sanciones, además de identificación de la persona conductora.",
  },
  {
    nombre: "Puntos del permiso",
    descripcion: "Consulta del saldo de puntos y de los cursos de recuperación.",
  },
  {
    nombre: "Pago de tasas",
    descripcion: "Consulta y pago de tasas relacionadas con trámites de tráfico.",
  },
  {
    nombre: "Cita previa",
    descripcion: "Solicitud y gestión de citas en las jefaturas de Tráfico.",
  },
  {
    nombre: "Informes de vehículos",
    descripcion: "Solicitud de informes para conocer datos administrativos de un vehículo.",
  },
  {
    nombre: "Educación y seguridad vial",
    descripcion: "Acceso a información y recursos sobre circulación segura.",
  },
];

export default function Servicios() {
  return (
    <section>
      <h1>Servicios de la DGT</h1>
      <p>Algunos de los trámites y servicios que ofrece la Dirección General de Tráfico:</p>
      <ul>
        {servicios.map(({ nombre, descripcion }) => (
          <li key={nombre}>
            <strong>{nombre}:</strong> {descripcion}
          </li>
        ))}
      </ul>
    </section>
  );
}