import ContractTerms from './contract-terms';

export default class Contract {
    id?:string;
    factionSymbol?:string;
    type?:string;
    terms?:ContractTerms = new ContractTerms();
    accepted?:boolean;
    fulfilled?:boolean;
    expiration?:Date;
}