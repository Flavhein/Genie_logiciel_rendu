import { ACCOUNT_LIST } from "./database.mjs";

export const accountCommandDAO = {
    insertAccount(account) {
        ACCOUNT_LIST.push(account);
    },
    updateAccount(account) {
        let index = ACCOUNT_LIST.findIndex(acc => acc.id===account.id);
        ACCOUNT_LIST[index]=account;
    },
};
