const bankDAO=require('./bankDAO.js');
const bank=require('./bank.js');
const transfer=require('./bankTransfer.js')

function main(){
    let accountId = 346;
    let amount = 12;
    ret = bank.getBalance(bankDAO.retrieveBalance,accountId);
    console.log(ret);
    bank.transferMoney(transfer,accountId,amount)
}

main();