import Ship from './ship'
import Account from './account'

export default class ShipsModel {
    account: Account;
    ships: Ship[];
    loading: boolean;
    error: string;
}