import { defineStore } from "pinia";
import usersData from '@/assets/data/users.json';

export const AuthStore = defineStore ('auth', {

    state: () => ({
        isEmailValid: false,
        isLoggedIn: false,
        errorMessageEmail: false,
        errorMessagePassword: false,

        emailValue: "",
      }),
    
    actions: {

        validEmail(email: string){

            const users = usersData;

            const user = users.find((user) => user.email === email);

            if (user) {
                this.isEmailValid = true

            } else {
                this.errorMessageEmail = true
            }
        },

        login (email: string, password: string){

            const users = usersData;

            const user = users.find((user) => user.email === email && user.password === password);

            if (user) {
                this.isLoggedIn = true
                alert('You login in Cenius')
            } else {
                this.errorMessagePassword = true
            }
        }
    }
})