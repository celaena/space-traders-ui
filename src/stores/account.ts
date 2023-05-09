import { defineStore } from 'pinia';
import Account from '../classes/account';
import User from '../classes/user';

export const accountStore = defineStore('account', {
    state: () => ({
        token: undefined,
        user: new User()
    } as Account),
    actions: {
        setToken(token:string) {
            this.token = token;
        },
        setUser(user:User) {
            this.user = user;
        }
    }
});