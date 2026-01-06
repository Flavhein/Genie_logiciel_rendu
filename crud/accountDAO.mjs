import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    //console.log(ACCOUNT_LIST);
  },
  retrieveAccountList() {
    const LIST = ACCOUNT_LIST.map(({ creationDate, ...reste }) => reste);
    //console.log(LIST);
    return LIST;
  },
  updateAccount(account) {
    //let ACC = ACCOUNT_LIST.find(acc => acc.id===account.id);
    //console.log(ACC);
    //ACC.firstName=account.firstName;
    //ACC.lastName=account.lastName;
    
    let index = ACCOUNT_LIST.findIndex(acc => acc.id===account.id);
    ACCOUNT_LIST[index]=account;
    //console.log(ACCOUNT_LIST);
  },
  retrieveAccount(id) {
    const ACC = ACCOUNT_LIST.find(acc => acc.id===id);
    let name = ACC.firstName + " " + ACC.lastName;
    return {id : ACC.id, name : name, creationDate : ACC.creationDate};
  },

  restore(id){
    const account = ACCOUNT_LIST.find(acc => acc.id===id);
    const newAccount = new Account(account.id, account.lastName, account.firstName, account.creationDate);
    return newAccount;
  }
};

