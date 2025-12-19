const bankDAO = {
    balance : 1,
    retrieveBalance() {
        console.log("Retrieve Balance : "+bankDAO.balance);
    }
};
module.exports = bankDAO;
