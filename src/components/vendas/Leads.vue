<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getApi } from '@/services/';

// Tipando como array de objetos
const leads = ref<Lead[]>([]);

interface Lead {
  id: any;
  nome: string;
  telefone: string;
}

onMounted(() => {
    getApi('leads', false).then((response) => {
        leads.value = response.data;
    });
});
</script>



<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Leads',
});
</script>

<template>
        <table class="table table-over">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Telefone</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(lead, index) in leads" :key="index">
                    <td>{{ lead.id }}</td>
                    <td>{{ lead.nome }}</td>
                    <td>{{ lead.telefone }}</td>
                    <td>
                        <router-link :to="`/home/vendas/leads/${lead.id}`" class="btn btn-sm btn-primary">Ver</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
</template>
