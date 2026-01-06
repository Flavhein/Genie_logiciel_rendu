import { accountCommandDAO } from "./accountCommandDAO.mjs"
import {Account} from "./account.mjs";

export const accountCommand = {
    saveAccount(id, lastName, firstName) {
        let account=accountCommandDAO.restore(id);
        account.firstName=firstName;
        account.lastName=lastName;
        const {creationDate, ...reste}=account;
        accountCommandDAO.updateDBQ(reste);
        accountCommandDAO.updateAccount(account);
    },
    addAccount(lastName, firstName) {
          const newAccount = new Account(null, lastName, firstName);
          const {creationDate, ...reste}=newAccount;
          accountCommandDAO.insertDBQ(reste);
          return accountCommandDAO.insertAccount(newAccount);
    },
};
