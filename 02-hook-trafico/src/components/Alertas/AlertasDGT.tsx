import { useState } from "react";
import "./AlertasDGT.css";



export default function AlertasDGT() {
  //Hook useState para manejar el estado del botón
  const [activo, setActivadas] = useState(false);

  return (
    <button
      className={`boton-alertas ${activo ? "activadas" : "desactivadas"}`}
      onClick={() => setActivadas(!activo)}
    >
      {activo ? "🔔 Alertas activadas" : "🔕 Activar alertas"}
    </button>
  );
}
