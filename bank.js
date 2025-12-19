const bank = {
    getBalance(callBack,accountId) {
    //    bankDAO.retrieveBalance();
        return callBack(accountId);
    },

    transferMoney(callBack,accountId,amount){
    //bankDAO.transfer(accountId,amount);
        callBack(accountId,amount);
    }
}

module.exports = bank;