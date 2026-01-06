import {Account} from "./account.mjs";
import { accountDAO } from "./accountDAO.mjs";
import { ACCOUNT_LIST } from "./database.mjs";

export const accountService = {
  addAccount(lastName, firstName) {
    const newAccount = new Account(null, lastName, firstName);
    return accountDAO.insertAccount(newAccount);
  },
  getAccountList() {
    return accountDAO.retrieveAccountList();
  },
  saveAccount(id, lastName, firstName) {
    let account=accountDAO.restore(id);
    account.firstName=firstName;
    account.lastName=lastName;
    accountDAO.updateAccount(account);
  },
  getAccount(id) {
    return accountDAO.retrieveAccount(id);
  },
};


