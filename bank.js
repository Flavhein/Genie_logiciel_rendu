const bank = {
    getBalance(callBack,accountId) {
        //bankDAO.retrieveBalance();
        return callBack(accountId);
    },

    transferMoney(callBack,accountIdDebit,accountIdCredit,amount){
        //bankDAO.transfer(accountIdDebit,accountIdCredit,amount);
        callBack(accountIdDebit,accountIdCredit,amount);
    }
}

module.exports = bank;