const bankDAO=require('./bankDAO.js');
const bank=require('./bank.js');

function main(){
    ret = bank.getBalance(bankDAO.retrieveBalance,56);
    console.log(ret)
}

main();