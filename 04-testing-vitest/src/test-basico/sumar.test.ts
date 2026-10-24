import { describe, it, expect } from "vitest";
import { sumar } from "../test-basico/sumar";

describe("Función sumar", () => {
  it("Debería sumar correctamente dos números", () => {
    expect(sumar(2, 3)).toBe(5);
  });

  it("debería devolver número negativo si ambos son negativos", () => {
    expect(sumar(-4, -6)).toBe(-10);
  });
});
 