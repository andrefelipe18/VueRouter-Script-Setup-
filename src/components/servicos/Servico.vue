<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { getApi } from '@/services/';
//Importando o route para pegar o id da rota
import { useRoute } from 'vue-router';

interface Servico {
  id: any;
  servico: string;
  icone: string;
  descricao: string;
}

const servico = ref<Servico>({
  id: 0,
  servico: '',
  icone: '',
  descricao: '',
});

//Pegando o id da rota
const route = useRoute();
const id = Number(route.params.id);

onMounted(() => {
    getApi('servicos', id).then((response) => {
        servico.value = response.data;
    });
});

//Reagindo a alteraçoes na URL
watch(() => route.params.id, (id) => {
    let idNumber = Number(id);
    getApi('servicos', idNumber).then((response) => {
        servico.value = response.data;
    });
});
</script>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Servico',
});
</script>

<template>
    <div class="card">
        <div class="card-header bg-primary text-white">{{ servico.servico }}</div>
        <div class="card-body">
            <p class="card-text">{{ servico.descricao }}</p>
        </div>
    </div>
</template>
