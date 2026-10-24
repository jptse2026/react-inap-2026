import { describe, it, expect, vi , afterEach} from "vitest";
import { obtenerEstadoTrafico, obtenerPuntosPermiso } from "../mocks/trafico";

describe("obtenerEstadoTráfico()", () => {

        afterEach(() => {
            vi.unstubAllGlobals();
        });
    

  it("debería devolver el estado mockeado del tráfico", async () => {
    // 🎭 Mock de fetch global
    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue({ estado: "Denso 🚗🚗" })
    });

    const estado = await obtenerEstadoTrafico("Barcelona");

    expect(estado).toBe("Denso 🚗🚗");
    expect(fetch).toHaveBeenCalledWith("https://api.dgt.es/trafico/Barcelona");
  });

  it("debería devolver los puntos del permiso", async () => {
    // 🎭 Mock de fetch global
    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue({ puntos : 15 })
    });

    const estado = await obtenerPuntosPermiso("00001111D");

    expect(estado).toBe(15);
    expect(fetch).toHaveBeenCalledWith("https://api.dgt.es/permisos/00001111D");
  });


 
});
