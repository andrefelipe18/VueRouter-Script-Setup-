<script lang="ts" setup>
import { ref, computed } from 'vue';
import router from '@/router';

const currentPageString = ref<string>('Dashboard');

router.beforeEach((to, from, next) => {
    currentPageString.value = to.name as string;
    next();
});

const currentPageName = computed(() => {
    if(currentPageString.value === 'home') {
        return 'Dashboard';
    } else if(currentPageString.value === 'vendas'){
        return 'Vendas';
    } else if(currentPageString.value === 'servicos'){
        return 'Serviços';
    }
});
</script>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Home',

});
</script>

<template>
    <div>
        <nav class="navbar navbar-light bg-light menu-superior">
            <div class="container">
                <router-link class="navbar-brand" to="/home">Empresa 360</router-link>
                <div class="navbar-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Sair</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="d-flex">
            <div class="list-group menu-esquerda">
                <router-link class="list-group-item list-group-item-action" :to="{name: 'dashboard'}"><i class="bi bi-speedometer2"></i>
                    Dashboard
                </router-link>
                <router-link class="list-group-item list-group-item-action" :to="{name: 'vendas'}"><i class="bi bi-cart"></i>
                    Vendas
                </router-link>
                <router-link class="list-group-item list-group-item-action" :to="{name: 'leads'}"><i class="bi bi-cart"></i>
                    -> Leads
                </router-link>
                <router-link class="list-group-item list-group-item-action" :to="{name: 'contratos'}"><i class="bi bi-cart"></i>
                    -> Contratos
                </router-link>
                <router-link class="list-group-item list-group-item-action" :to="{name: 'servicos'}"><i class="bi bi-card-checklist"></i>
                    Serviços
                </router-link>
            </div>

            <div class="w-100">
                <nav aria-label="breadcrumb" class="pt-1 ps-3">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">{{ currentPageName }}</li>
                    </ol>
                </nav>

                <div class="container-fluid">
                    <router-view></router-view>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.menu-superior {
    border-bottom: solid 1px #ccc;
}

.menu-esquerda {
    border-right: solid 1px #ccc;
    width: 250px;
}

.router-link-exact-active {
    background-color: #ccc;
}
</style>