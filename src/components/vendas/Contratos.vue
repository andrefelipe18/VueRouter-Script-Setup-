<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getApi } from '@/services/';

// Tipando como array de objetos
const contratos = ref<Contrato[]>([]);

interface Contrato {
    id: any;
    leadId: any;
    servicoId: any;
    data_inicio: string;
    data_fim: string;
    lead: Lead;
    servico: Servico;
}

interface Lead {
    id: number;
    nome: string;
    telefone: string;
}

interface Servico {
    id: any;
    servico: string;
    icone: string;
}

onMounted(() => {
    getApi('contratos?_expand=lead&_expand=servico', false).then((response) => {
        contratos.value = response.data;

        contratos.value.forEach((contrato) => {
            contrato.data_inicio = new Date(contrato.data_inicio).toLocaleDateString();
            contrato.data_fim = new Date(contrato.data_fim).toLocaleDateString();
        });
    });

});




</script>



<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Contratos',
});
</script>

<template>
    <table class="table table-over">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">LEAD</th>
                <th scope="col">SERVICO</th>
                <th scope="col">DATA INICIO</th>
                <th scope="col">DATA FIM</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(contrato, index) in contratos" :key="index">
                <td>{{ contrato.id }}</td>
                <td>{{ contrato.lead.nome }}</td>
                <td>{{ contrato.servico.servico }}</td>
                <td>{{ contrato.data_inicio }}</td>
                <td>{{ contrato.data_fim }}</td>
            </tr>
        </tbody>
    </table>
</template>
