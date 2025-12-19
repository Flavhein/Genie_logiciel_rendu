const bankDAO = {
    balance : new Map(),

    addAccount(accountId,amount){
        bankDAO.balance.set(accountId,amount);
    },

    retrieveBalance(accountId) {
        console.log("Retrieve Balance : "+bankDAO.balance.get(accountId)+" account : "+accountId);
        return bankDAO.balance.get(accountId);
    },

    debitAccount(accountId, amount){
        temp_balance=bankDAO.balance.get(accountId);
        bankDAO.balance.set(accountId,temp_balance-amount);
    },

    creditAccount(accountId, amount){
        temp_balance=bankDAO.balance.get(accountId);
        bankDAO.balance.set(accountId,temp_balance+amount);
    }
};
module.exports = bankDAO;
