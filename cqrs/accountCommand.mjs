import { accountCommandDAO } from "./accountCommandDAO.mjs"
import {Account} from "./account.mjs";
import { cacheDAO } from "./cacheDAO.mjs";

export const accountCommand = {
    saveAccount(id, lastName, firstName) {
        const name = firstName + " " + lastName;

        let account=accountCommandDAO.restore(id);
        account.firstName=firstName;
        account.lastName=lastName;
        const {creationDate, ...reste}=account;
        cacheDAO.updateCache(id,name);
        accountCommandDAO.updateDBQ(reste);
        accountCommandDAO.updateAccount(account);
    },
    addAccount(lastName, firstName) {
        const name = firstName + " " + lastName;

        const newAccount = new Account(null, lastName, firstName);
        const {creationDate, ...reste}=newAccount;
        cacheDAO.insertCache(newAccount.id,name);
        accountCommandDAO.insertDBQ(reste);
        return accountCommandDAO.insertAccount(newAccount);
    },
};
