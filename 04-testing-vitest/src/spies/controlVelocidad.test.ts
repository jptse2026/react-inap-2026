import { describe, it, expect, vi } from "vitest";
import * as alertas from "../spies/alertas";
import { verificarVelocidad } from "../spies/controlVelocidad";



describe("verificarVelocidad()", () => {

    

  it("debería llamar a enviarAlerta 2 veces", () => {
    // 🕵️‍♂️ Espiamos la función 'enviarAlerta' 
    const spy = vi.spyOn(alertas, "enviarAlerta");  

    

    verificarVelocidad(140, 100);

    // ✅ Verifica si se llamó
    expect(spy).toHaveBeenCalled();
    // ✅ Verifica cuántas veces
    expect(spy).toHaveBeenCalledTimes(2);
    // ✅ Verifica con qué argumento
    expect(spy).toHaveBeenCalledWith("Exceso de velocidad detectado");
    expect(spy).toHaveBeenCalledWith("Falta grave. Son 300 euros y 4 puntos");

  

  });

  it("debería llamar a enviarAlerta 2 veces", () => {
    // 🕵️‍♂️ Espiamos la función 'enviarAlerta' 
    const spy = vi.spyOn(alertas, "enviarAlerta");  

    

    verificarVelocidad(90, 100);

    // ✅ Verifica si se llamó
    expect(spy).toHaveBeenCalled();
    // ✅ Verifica cuántas veces
    expect(spy).toHaveBeenCalledTimes(1);
    // ✅ Verifica con qué argumento
    expect(spy).toHaveBeenCalledWith("Vehículo circulando a velocidad correcta");

  

  });
});
