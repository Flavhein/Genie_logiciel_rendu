const isValide = require('./passwordValidator');


test('bonjour1 is at least 8 chars, one letter and one digit', () => {
  expect(isValide("bonjour1")).toBe(true);
});




