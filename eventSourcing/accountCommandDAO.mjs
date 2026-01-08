import { queryDatabase } from "./queryDatabase.mjs";
import {Account} from "./account.mjs";
import { eventStore } from "./eventStore.mjs"

export const accountCommandDAO = {
    restore(id){
        const events = eventStore.getEventsByAccountId(id);
        return events.reduce((newAccount, event)=>{
            if (event.name === "accountAdded"){
                newAccount=new Account(id,event.payload.lastName,event.payload.firstName,event.payload.creationDate);
            }
            if (event.name === "accountUpdated"){
                newAccount.firstName = event.payload.firstName;
                newAccount.lastName = event.payload.lastName;
            }
            return newAccount})
    },
    insertDBQ(account){
        queryDatabase.accountSummaryList.push(account);
    },
    updateDBQ(account) {
        let index = queryDatabase.accountSummaryList.findIndex(acc => acc.id===account.id);
        queryDatabase.accountSummaryList[index]=account;
    },
};
