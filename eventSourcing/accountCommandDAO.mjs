//import { ACCOUNT_LIST } from "./database.mjs";
import { queryDatabase } from "./queryDatabase.mjs";
import {Account} from "./account.mjs";
import { eventStore } from "./eventStore.mjs"
import { Event } from "./event.mjs"

export const accountCommandDAO = {
    //insertAccount(account) {
    //    ACCOUNT_LIST.push(account);
    //},
    //updateAccount(account) {
    //    let index = ACCOUNT_LIST.findIndex(acc => acc.id===account.id);
    //    ACCOUNT_LIST[index]=account;
    //},
    restore(id){
        //const account = ACCOUNT_LIST.find(acc => acc.id===id);
        //const newAccount = new Account(account.id, account.lastName, account.firstName, account.creationDate);
        //return newAccount;
        const events = eventStore.getEventsById(id);
        console.log(events);
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
