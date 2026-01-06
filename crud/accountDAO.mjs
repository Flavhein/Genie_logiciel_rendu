import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    console.log(ACCOUNT_LIST);
  },
  retrieveAccountList() {
    const LIST = ACCOUNT_LIST.map(({ creationDate, ...reste }) => reste);
    //console.log(LIST);
    return LIST;
  },
  updateAccount(account) {
    let ACC = ACCOUNT_LIST.find(acc => acc.id===account.id);
    //console.log(ACC);
    ACC.firstName=account.firstName;
    ACC.lastName=account.lastName;
    console.log(ACCOUNT_LIST);
  },
  retrieveAccount(id) {
    const ACC = ACCOUNT_LIST.find(acc => acc.id===id);
    return ACC
  },
};

