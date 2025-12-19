const bank = {
    getBalance(callBack,accountId) {
    //    bankDAO.retrieveBalance();
        return callBack(accountId);
    }
}
module.exports = bank;