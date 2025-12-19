const isValide = require('./passwordValidator');


test('bonjour1 is at least 8 chars', () => {
  expect(isValide("bonjour1")).toBe(true);
});

test('124562562456 has at least 1 digit', () => {
    expect(isValide("124562562456")).toBe(true);
});