import ContractPayment from './contract-payment';
import ContractDelivery from './contract-delivery';

export default class ContractTerms {
    deadline?:Date;
    payment:ContractPayment = new ContractPayment();
    deliver:ContractDelivery[] = [];      
}