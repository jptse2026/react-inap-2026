import { describe, it, expect, vi } from "vitest";

describe("Uso de vi.fn()", () => {
  it("simula una función callback", () => {
    const callback = vi.fn(); // crea un espía vacío

    const botones = ["rojo", "verde", "ámbar","amarillo"];
    botones.forEach( b => callback(b));

    // ✅ Verifica cuántas veces se llamó
    expect(callback).toHaveBeenCalledTimes(botones.length);

    // ✅ Verifica con qué argumentos
    expect(callback).toHaveBeenCalledWith("rojo");

  });
});
