const isValide = require('./passwordValidator');


test('bonjour1 is at least 8 characters with one digit', () => {
  expect(isValide("bonjour1")).toBe(true);
});

test('bon1our has less than 8 char', () => {
  expect(isValide("bon1our")).toBe(false);
});

test('bonjoour has no digit', () => {
  expect(isValide("bonjoour")).toBe(false);
});

test('12345678 has no letter', () => {
  expect(isValide("12345678")).toBe(false);
});
