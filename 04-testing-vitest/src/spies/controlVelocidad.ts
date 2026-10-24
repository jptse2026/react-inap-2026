import { enviarAlerta } from "../spies/alertas";

export function verificarVelocidad(velocidad: number, limite: number) {
  if (velocidad > limite) {
    enviarAlerta("Exceso de velocidad detectado");
    if((velocidad-limite) > 30 ) enviarAlerta("Falta grave. Son 300 euros y 4 puntos");
    else enviarAlerta("Falta leve. Son 200 euros  y 2 puntos");
  }
  else enviarAlerta("Vehículo circulando a velocidad correcta");
}
