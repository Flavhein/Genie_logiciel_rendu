const isLongEnough = require('./passwordValidator');

test('bonjourl has at least 8 char', () => {
  expect(isLongEnough("bonjourlala")).toBe(true);
});

test('bonjour has less than 8 char', () => {
  expect(isLongEnough("bonjour")).toBe(false);
});