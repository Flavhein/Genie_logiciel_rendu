const bankDAO=require('./bankDAO.js');
const bank=require('./bank.js');

function main(){
    let accountId = 346
    ret = bank.getBalance(bankDAO.retrieveBalance,accountId);
    console.log(ret)
}

main();