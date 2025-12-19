const bankDAO=require('./bankDAO.js');
const bank=require('./bank.js');

function main(){
    bank.getBalance(bankDAO.retrieveBalance);
}

main();