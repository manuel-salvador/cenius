<template>
    <section class="contain-login">

        <img src="../assets/logoCenius.svg" alt="logo" width="50">
            <h2>{{ authStore.isEmailValid ? 'Nice to see you!' : 'Welcome to Cenius' }}</h2>
            <p>{{ authStore.isEmailValid ? authStore.emailValue : 'Sing in to get a started' }}</p>
        
            <v-form v-if="authStore.isEmailValid" @submit.prevent="login">

                <div class="error-message" v-if="authStore.errorMessagePassword && !authStore.isLoggedIn">
                    <p>Password and/or email incorrect</p>
                </div>

                <v-text-field label="Password" type="password" v-model="password" required :rules="passwordRules"></v-text-field>
                <v-btn color="primary" type="submit" :disabled="!valid">Let's start</v-btn>
            </v-form>
    
            <v-form v-model="valid" v-else @submit.prevent="validEmail">
    
                <div class="error-message" v-if="valid && authStore.errorMessageEmail">
                    <p>Email is not register</p>
                </div>
    
                <v-text-field label="Email address" v-model="email" required :rules="emailRules"></v-text-field>
                <v-btn color="primary" type="submit" :disabled="!valid">Continue</v-btn>
            </v-form>
    </section>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { AuthStore } from '@/stores/auth';
    import { type Router, useRouter } from 'vue-router';

    const valid = ref(false);
    const email = ref('');
    const password = ref('');
    const authStore = AuthStore();

    const router: Router = useRouter();

    const emailRules = [
        (value: string) => {
            if (value) return true

            return 'Email is required.'
        }
    ]
    const passwordRules = [
        (value: string) => {
            if (value) return true

            return 'Password is required.'
        }
    ]

    const validEmail = () => {
        authStore.validEmail(email.value);
        authStore.emailValue = email.value; 
    };

    const login = () => {
        authStore.login(authStore.emailValue, password.value); 
        
        router.push('/dashboard');
    };


</script>

<style scoped>
    .contain-login{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h2{
        font-weight: 700;
    }
    .v-form{
        margin-top: 30px;
        width: 30%;
    }
    .v-btn {
        width: 100%;
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
    }
    .error-message{
        height: 50px;
        background-color: #FDE2DD;
        color: #C5280C;
        border: 1px solid #C5280C;
        border-radius: 10px;
        margin: 10px 0;
        text-align: center;
        line-height: 50px;
        vertical-align: middle;
    }

    @media screen and (max-width: 550px) {
        .v-form{
            width: 90%;
        }
   
    }
</style>