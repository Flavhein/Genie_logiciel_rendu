import { accountCommandDAO } from "./accountCommandDAO.mjs"
import {Account} from "./account.mjs";

export const accountCommand = {
    saveAccount(id, lastName, firstName) {
        const newAccount = new Account(id, lastName, firstName);
        accountCommandDAO.updateAccount(newAccount);
    },
    addAccount(lastName, firstName) {
          const newAccount = new Account(null, lastName, firstName);
          return accountCommandDAO.insertAccount(newAccount);
    },
};
