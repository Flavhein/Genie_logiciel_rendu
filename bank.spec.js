//import {bank} from './bank.js'
const bank = require('./bank.js');
const bankDAO = require('./bankDAO.js');

const mockCallback = jest.fn(() => bankDAO.balance);
const accountId = 56;

test('retrieveBalance mock function', () => {
    ret=bank.getBalance(mockCallback,accountId);
    expect(mockCallback).toHaveBeenCalled();
    expect(mockCallback).toHaveBeenCalledWith(accountId);
    expect(ret).toBe(bankDAO.balance);
});