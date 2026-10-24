export async function obtenerEstadoTrafico(ciudad: string) {
  const res = await fetch(`https://api.dgt.es/trafico/${ciudad}`);
  const data = await res.json();
  return data.estado;
}


export async function obtenerPuntosPermiso(dni: string) {
  const res = await fetch(`https://api.dgt.es/permisos/${dni}`);
  const data = await res.json();
  return data.puntos;
}




