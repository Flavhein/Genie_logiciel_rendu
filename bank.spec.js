const bank = require('./bank.js');
//const bankDAO = require('./bankDAO.js');

const test_balance = 12;
const mockCallback = jest.fn(() => test_balance);
const test_accountId = 56;

test('retrieveBalance mock function', () => {
    ret=bank.getBalance(mockCallback,test_accountId);
    expect(mockCallback).toHaveBeenCalled();
    expect(mockCallback).toHaveBeenCalledWith(test_accountId);
    expect(ret).toBe(test_balance);
});