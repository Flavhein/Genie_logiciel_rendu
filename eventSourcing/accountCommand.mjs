import { accountCommandDAO } from "./accountCommandDAO.mjs"
import {Account} from "./account.mjs";
import { cacheDAO } from "./cacheDAO.mjs";
import { eventStore } from "./eventStore.mjs"
import { Event } from "./event.mjs"

export const accountCommand = {
    saveAccount(id, lastName, firstName) {
        const name = firstName + " " + lastName;

        let account=accountCommandDAO.restore(id);
        account.firstName=firstName;
        account.lastName=lastName;
        const {creationDate, ...reste}=account;
        cacheDAO.updateCache(id,name);
        accountCommandDAO.updateDBQ(reste);
        eventStore.addEvent(new Event(account.id,{lastName,firstName},"accountUpdated"));
    },
    addAccount(lastName, firstName) {
        const name = firstName + " " + lastName;

        const newAccount = new Account(null, lastName, firstName);
        const {creationDate, ...reste}=newAccount;
        cacheDAO.insertCache(newAccount.id,name);
        accountCommandDAO.insertDBQ(reste);
        eventStore.addEvent(new Event(newAccount.id,{lastName, firstName, creationDate : newAccount.creationDate},"accountAdded"));
    },
};
