const bank = {
    getBalance(callBack,accountId) {
        //bankDAO.retrieveBalance();
        return callBack(accountId);
    },

    transferMoney(debitCall,transferCall,accountIdCredit,accountIdDebit,amount){
        //bankDAO.transfer(accountIdDebit,accountIdCredit,amount);
        transferCall(accountIdCredit,amount)
        .then(debitCall(accountIdDebit,amount))
        .catch(() => {console.log("amount not correct");})
    }
}

module.exports = bank;