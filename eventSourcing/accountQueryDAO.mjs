import { queryDatabase } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";
import { eventStore } from "./eventStore.mjs"

export const accountQueryDAO = {
    retrieveAccountList() {
        return queryDatabase.accountSummaryList;
    },
    retrieveAccount(id) {
        return accountCache[id];
    },
    retrieveListEvents(){
        return eventStore.getEventList();
    }
};
