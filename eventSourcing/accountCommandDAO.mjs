import { queryDatabase } from "./queryDatabase.mjs";
import {Account} from "./account.mjs";
import { eventStore } from "./eventStore.mjs"

export const accountCommandDAO = {
    restore(id){
        const events = eventStore.getEventsByAccountId(id);
        let newAccount = new Account(id,events[0].payload.lastName,events[0].payload.firstName,events[0].payload.creationDate);
        for (let i =1;i<events.length;i++) {
                if (events[i].name = "accountUpdated"){
                    newAccount.firstName = events[i].payload.firstName;
                    newAccount.lastName = events[i].payload.lastName;
                }
        }
        return newAccount;
    },
    insertDBQ(account){
        queryDatabase.accountSummaryList.push(account);
    },
    updateDBQ(account) {
        let index = queryDatabase.accountSummaryList.findIndex(acc => acc.id===account.id);
        queryDatabase.accountSummaryList[index]=account;
    },
};
