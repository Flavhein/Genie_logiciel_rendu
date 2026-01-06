import { accountService } from "./accountService.mjs";

//list
accountService.addAccount("LAPORTE","Jean");
let accounts = accountService.getAccountList();
console.log(accounts);

//modifier
accountService.saveAccount(accounts[0].id,"LEMOINE","Jacques");
let newaccounts = accountService.getAccountList();
console.log(newaccounts);

//récupérer
let accountCompact=accountService.getAccount(newaccounts[0].id)
console.log(accountCompact);