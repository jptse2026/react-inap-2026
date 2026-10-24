const informacion = [
  { etiqueta: "Ámbito", valor: "Atención y trámites relacionados con la movilidad" },
  { etiqueta: "Atención", valor: "Información en línea y presencial con cita previa" },
  { etiqueta: "Objetivo", valor: "Facilitar una movilidad más segura y sostenible" },
];

export default function About() {
  return (
    <section>
      <h1>Sobre la DGT</h1>
      <p>
        La Dirección General de Tráfico trabaja para mejorar la seguridad vial
        y facilitar a la ciudadanía la gestión de sus trámites de tráfico.
      </p>
      <p>
        Esta página es una demostración educativa: los datos y la descripción
        que aparecen aquí son simulados y no representan información oficial.
      </p>
      <h2>Información del portal</h2>
      <ul>
        {informacion.map(({ etiqueta, valor }) => (
          <li key={etiqueta}>
            <strong>{etiqueta}:</strong> {valor}
          </li>
        ))}
      </ul>
    </section>
  );
}