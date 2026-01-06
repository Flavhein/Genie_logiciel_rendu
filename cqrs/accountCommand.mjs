import { accountCommandDAO } from "./accountCommandDAO.mjs"
import {Account} from "./account.mjs";

export const accountCommand = {
    saveAccount(id, lastName, firstName) {
        let account=accountCommandDAO.restore(id);
        account.firstName=firstName;
        account.lastName=lastName;
        accountCommandDAO.updateAccount(account);
    },
    addAccount(lastName, firstName) {
          const newAccount = new Account(null, lastName, firstName);
          return accountCommandDAO.insertAccount(newAccount);
    },
};
