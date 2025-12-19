const isValide = require('./passwordValidator');


test('bonjour1 is at least 8 chars', () => {
  expect(isValide("bonjour1")).toBe(true);
});
