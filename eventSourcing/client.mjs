import { accountQuery } from "./accountQuery.mjs"
import { accountCommand } from "./accountCommand.mjs"

accountCommand.addAccount("RAJOT", "Paul");
accountCommand.addAccount("MEUNIER", "Arthur");

let aList = accountQuery.getAccountList();
console.log(aList); 

let idP = aList[0].id;
accountCommand.saveAccount(idP, "GONCALVES", "Andre");

let acc = accountQuery.getAccount(idP);
console.log(acc)

console.log(accountQuery.getEventList());