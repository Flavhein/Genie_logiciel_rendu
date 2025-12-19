const bankDAO = {
    balance : 1,
    retrieveBalance(accountId) {
        console.log("Retrieve Balance : "+bankDAO.balance+" account : "+accountId);
        return bankDAO.balance;
    }
};
module.exports = bankDAO;
