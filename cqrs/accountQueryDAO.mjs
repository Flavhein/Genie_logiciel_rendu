//import { ACCOUNT_LIST } from "./database.mjs";
import { queryDatabase } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";

export const accountQueryDAO = {
    retrieveAccountList() {
        //const LIST = ACCOUNT_LIST.map(({ creationDate, ...reste }) => reste);
        return queryDatabase.accountSummaryList;
    },
    retrieveAccount(id) {
        //const ACC = ACCOUNT_LIST.find(acc => acc.id===id);
        //let name = ACC.firstName + " " + ACC.lastName;
        //return {id : ACC.id, name : name};
        return accountCache[id];
    },
    insertCache(id,name){
        accountCache[id]=name;
    },
    updateCache(id,name){
        accountCache[id]=name;
    }
};
