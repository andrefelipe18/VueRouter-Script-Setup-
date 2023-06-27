<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';

const email = ref<string>('');
const senha = ref<string>('');

let emailAdmin: string = 'admin@email.com';
let senhaAdmin: string = '@1234';

let emailLogin: string = '';
let senhaLogin: string = '';

const login = () => {
    if (email.value === emailAdmin && senha.value === senhaAdmin || email.value === emailLogin && senha.value === senhaLogin) {
        router.push('/home'); // redireciona para a página home
    } else {
        alert('E-mail ou senha inválidos! \n Lembre se usar o e-mail: ' + emailAdmin + ' e a senha: ' + senhaAdmin + ' para acessar o sistema.');
    }
}
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Login',
});
</script>

<template>
    <div>
        <nav class="navbar navbar-light bg-light menu-superior">
            <div class="container">
                <a class="navbar-brand" href="#">Empresa 360</a>
                <div class="navbar-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">Voltar</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="row mt-5">
            <div class="col-6 offset-3">
                <div class="card">
                    <p class="card-header">Entrar</p>
                    <div class="card-body">
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="E-mail" v-model="email">
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" placeholder="Senha" v-model="senha">
                        </div>
                        <button class="btn btn-primary" @click="login()">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
