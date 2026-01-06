import { ACCOUNT_LIST } from "./database.mjs";
import { queryDatabase } from "./queryDatabase.mjs";
import {Account} from "./account.mjs";

export const accountCommandDAO = {
    insertAccount(account) {
        ACCOUNT_LIST.push(account);
    },
    updateAccount(account) {
        let index = ACCOUNT_LIST.findIndex(acc => acc.id===account.id);
        ACCOUNT_LIST[index]=account;
    },
    restore(id){
        const account = ACCOUNT_LIST.find(acc => acc.id===id);
        const newAccount = new Account(account.id, account.lastName, account.firstName, account.creationDate);
        return newAccount;
    },
    insertDBQ(account){
        queryDatabase.accountSummaryList.push(account);
    },
    updateDBQ(account) {
        let index = queryDatabase.accountSummaryList.findIndex(acc => acc.id===account.id);
        queryDatabase.accountSummaryList[index]=account;
    }
};
