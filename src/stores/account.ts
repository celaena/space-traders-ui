import { defineStore } from 'pinia';
import Account from '../classes/account';
import User from '../classes/user';

let match = document.cookie.match(new RegExp('(^| )Token=([^;]+)'));

export const accountStore = defineStore('account', {
    state: () => ({
        token: match ? match[2] : undefined,
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