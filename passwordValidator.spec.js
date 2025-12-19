const isValide = require('./passwordValidator');


test('bonjour1 is at least 8 chars with at least one letter and one digit', () => {
  expect(isValide("bonjour1")).toBe(true);
});

test('bonour1 is only 7 chars', () => {
  expect(isValide("bonour1")).toBe(false);
});

test('bonjourp has no digit', () => {
  expect(isValide("bonjourp")).toBe(false);
});

test('12345678 has no letter', () => {
    expect(isValide("12345678")).toBe(false);
});


