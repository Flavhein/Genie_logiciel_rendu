import {bankDAO} from './bankDAO.js'

export const bank ={
    getBalance() {
        bankDAO.retrieveBalance();
    }
}
