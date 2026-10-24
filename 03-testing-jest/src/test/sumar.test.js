const sumar = require('../functions/sumar');

test('Suma 1 + 2 igual a 3', () => {
  expect(sumar(1, 2)).toBe(3);
});