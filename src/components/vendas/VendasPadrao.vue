<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getApi } from '@/services/';

// Tipando como array de objetos
const leads = ref<Lead[]>([]);
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
    getApi('leads', false).then((response) => {
        leads.value = response.data;
    });

    getApi('contratos', false).then((response) => {
        contratos.value = response.data;
    });
});

</script>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'VendasPadrao',
});
</script>

<template>
    <div>
        <div class="row">
            <div class="col-3 offset-2 bg-suc">
                <div class="card">
                    <div class="card-header bg-success text-white">Leads</div>
                    <div class="card-body">{{ leads.length }}</div>
                </div>
            </div>

            <div class="col-3 offset-2">
                <div class="card">
                    <div class="card-header  bg-success text-white">Contratos</div>
                    <div class="card-body">{{ contratos.length }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
