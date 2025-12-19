//import {bank} from './bank.js'
const bank = require('./bank.js');

const mockCallback = jest.fn(x => console.log("x"));

test('retrieveBalance mock function', () => {
  bank.getBalance(mockCallback);
  expect(mockCallback).toHaveBeenCalled();
});