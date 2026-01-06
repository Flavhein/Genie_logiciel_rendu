import { accountService } from "./accountService.mjs";

accountService.addAccount("LAPORTE","Jean");
let accounts = accountService.getAccountList();


console.log(accounts)

accountService.saveAccount(accounts[0].id,"LEMOINE","Jacques");