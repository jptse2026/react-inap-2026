const validarDoi = require("../functions/valDoi");


test("Dni 32255886L espera true" , () => {
    expect(validarDoi("32255886L")).toBeTruthy();
});

test("Dni X0528457D espera true" , () => {
    expect(validarDoi("X0528457D")).toBeTruthy();
});

test("Dni X0528457 expera falso" , () => {
    expect(validarDoi("X0528457")).toBeFalsy();
});

test("Dni X0528457P expera falso" , () => {
    expect(validarDoi("X0528457P")).toBeFalsy();
});

