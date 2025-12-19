const isValide = require('./passwordValidator');


test('b0njour12 has at least 5 letters and 3 digits', () => {
  expect(isValide("b0njour12",3,5)).toBe(true);
});

test('bon1our has less than 8 chars', () => {
  expect(isValide("bon1our",1,7)).toBe(false);
});

test('12345678910your has less than 5 letters', () => {
  expect(isValide("12345678910your",10,5)).toBe(false);
});

test('bon1jour2 has less than 3 digits', () => {
  expect(isValide("bon1jour2",3,6)).toBe(false);
});

test('bonjourno has not digit which is a bonus rule', () => {
  expect(isValide("bon1our",0,8,[/\d/,/[A-Za-z]/])).toBe(false);
});

test('12325346 has no letter which is a bonus rule', () => {
  expect(isValide("bon1our",5,0,[/\d/,/[A-Za-z]/])).toBe(false);
});


