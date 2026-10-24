import { describe, it, expect, beforeEach, beforeAll, afterAll, afterEach } from "vitest";

let velocidad: number;

describe("Control de velocidad", () => {

  beforeAll(() => {
    console.log("Iniciamos todos los test sobre velocidad")
  });
  
   afterAll(() => {
    console.log("Finalizamos todos los test sobre velocidad")
  });
  
  beforeEach(() => {
    velocidad = 100;
    console.log("La velocidad inicial del test es " + velocidad)
  });
  
  afterEach(() => {
    console.log("La velocidad final del test es " + velocidad)
  });

  it("aumenta velocidad al acelerar", () => {
    velocidad += 20;
    expect(velocidad).toBeGreaterThan(100);
  });

  it("disminuye velocidad al frenar", () => {
    velocidad -= 30;
    expect(velocidad).toBe(70);
  });
});
