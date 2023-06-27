<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue';
import { getApi, updateLead } from '@/services/';

interface Lead {
    id: number;
    nome: string;
    telefone: string;
}

const lead = ref<Lead>({
    id: 0,
    nome: '',
    telefone: '',
});

//Pegando o id da rota enviado pela rota como props
const props = defineProps({
    id: {
        type: Number,
        required: true,
    }
});

onMounted(() => {
    getApi('leads', props.id).then((response) => {
        lead.value = response.data;
    });
});

//Função para atualizar o lead
const nome = ref('');
const telefone = ref('');

const atualizar = () => {
    updateLead(props.id, nome.value, telefone.value).then(() => {
        lead.value.nome = nome.value;
        lead.value.telefone = telefone.value;
    });
};
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Lead',
});
</script>

<template>
    <div>
        <div class="d-flex justify-content-between">
            <h1>Detalhes da Lead {{ lead.id }}</h1>
            <router-link to="/home/vendas/leads" class="btn btn-primary btn-sm">Voltar</router-link>
        </div>
        <div class="row g-3 d-flex align-items-center justify-content-md-around mt-3">
            <div class="col-4">
                <h4>ID</h4>
            </div>
            <div class="col-4">
                <input type="text" class="form-control" :placeholder="`${lead.id}`" disabled>
            </div>
        </div>

        <div class="row g-3 d-flex align-items-center justify-content-md-around mt-3">
            <div class="col-4">
                <h4>Nome</h4>
            </div>
            <div class="col-4">
                <input type="text" class="form-control" :placeholder="`${lead.nome}`" v-model="nome">
            </div>
        </div>

        <div class="row g-3 d-flex align-items-center justify-content-md-around mt-3">
            <div class="col-4">
                <h4>Telefone</h4>
            </div>
            <div class="col-4">
                <input type="text" class="form-control" :placeholder="`${lead.telefone}`" v-model="telefone">
            </div>
        </div>

        <div class="row g-3 d-flex align-items-center justify-content-md-around mt-3">
            <div class="col-4">
                <h4>Atualize os dados: </h4>
            </div>
            <div class="col-4">
                <button type="submit" class="btn btn-primary btn-sm" @click="atualizar()">Atualizar</button>
            </div>
        </div>
    </div>
</template>
