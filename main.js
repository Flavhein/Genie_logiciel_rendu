const bankDAO=require('./bankDAO.js');
const bank=require('./bank.js');
const transfer=require('./bankTransfer.js')

function main(){
    let accountIdAlice = 346;
    let amount = 12;
    let accountIdBob = 567;
    bankDAO.addAccount(accountIdAlice,amount);
    bankDAO.addAccount(accountIdBob,amount+20);
    ret = bank.getBalance(bankDAO.retrieveBalance,accountIdAlice);
    console.log(ret);
    bank.transferMoney(bankDAO.debitAccount,transfer,accountIdAlice,accountIdBob,amount);
    bank.getBalance(bankDAO.retrieveBalance,accountIdAlice);

}

main();