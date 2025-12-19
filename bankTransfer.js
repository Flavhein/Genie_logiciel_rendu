//const bankDAO = require('./bankDAO.js');

function transfer(accountIdCredit,amount){
    //It should not be link to bankDAO, but just a console.log
    //bankDAO.creditAccount(accountIdCredit,amount);
    
    return new Promise((resolve,reject)=>{
        if (amount < 0){reject();}
        console.log(accountIdCredit+" | "+amount);
        resolve();
    });
}

module.exports = transfer;