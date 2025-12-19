const bank = require('./bank.js');
//const bankDAO = require('./bankDAO.js');
//const transfer = require('./bankTransfer.js');


test('getBalance mock function for retrieveBalance', () => {
    const expected_balance = 12;
    const expected_accountId = 56;
    const mock_retrieveBalance = jest.fn(() => expected_balance);
    
    const result_balance=bank.getBalance(mock_retrieveBalance,expected_accountId);
    expect(mock_retrieveBalance).toHaveBeenCalled();
    expect(mock_retrieveBalance).toHaveBeenCalledWith(expected_accountId);
    expect(result_balance).toBe(expected_balance);
});

test('transferMoney mock function for transfer', () => {
    const espected_amount = 78;
    const expected_accountId = 45;
    const mock_transfer = jest.fn();

    bank.transferMoney(mock_transfer,expected_accountId,espected_amount);
    expect(mock_transfer).toHaveBeenCalled();

});