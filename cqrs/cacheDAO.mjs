import { accountCache } from "./cache.mjs";

export const cacheDAO = {
    insertCache(id,name){
        accountCache[id]=name;
    },
    updateCache(id,name){
        accountCache[id]=name;
    }
}