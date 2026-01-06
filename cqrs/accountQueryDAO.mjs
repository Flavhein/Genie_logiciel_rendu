import { ACCOUNT_LIST } from "./database.mjs";

export const accountQueryDAO = {
    retrieveAccountList() {
        const LIST = ACCOUNT_LIST.map(({ creationDate, ...reste }) => reste);
        return LIST;
    },
    retrieveAccount(id) {
        const ACC = ACCOUNT_LIST.find(acc => acc.id===id);
        let name = ACC.firstName + " " + ACC.lastName;
        return {id : ACC.id, name : name};
    },
};
