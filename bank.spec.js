const bank = require('./bank.js');
//const bankDAO = require('./bankDAO.js');
const transfer = require('./bankTransfer.js');


test('getBalance mock function for retrieveBalance', () => {
    //const expected_balance = 12;
    const expected_accountId = 56;
    const mock_retrieveBalance = jest.fn((expected_accountId) => expected_accountId);
    
    const result_balance=bank.getBalance(mock_retrieveBalance,expected_accountId);
    expect(mock_retrieveBalance).toHaveBeenCalled();
    expect(mock_retrieveBalance).toHaveBeenCalledWith(expected_accountId);
    expect(result_balance).toBe(expected_accountId);
});

test('transferMoney mock function for transfer, reject', () => {
    const expected_amount = 78;
    const Id_receive = 45;
    const Id_give = 56
    const mock_debit = jest.fn(()=>console.log("out_debit"));
    const mock_transfer = jest.fn(()=> Promise.reject());
    
    bank.transferMoney(mock_debit,mock_transfer,Id_give,Id_receive,expected_amount);
    expect(mock_transfer).toHaveBeenCalledWith(Id_give,expected_amount);
    //expect(mock_debit).toHaveBeenCalledTimes(0);
});


test('transferMoney mock function for transfer, resolve', () => {
    const expected_amount = 20;
    const Id_receive = 45;
    const Id_give = 56
    const mock_debit = jest.fn(()=>console.log("out_debit"));
    const mock_transfer = jest.fn(()=> Promise.resolve());
    
    bank.transferMoney(mock_debit,mock_transfer,Id_give,Id_receive,expected_amount);
    expect(mock_transfer).toHaveBeenCalledWith(Id_give,expected_amount);
    expect(mock_debit).toHaveBeenCalledWith(Id_receive,expected_amount);
});