<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getApi } from '@/services/';

// Tipando como array de objetos
const servicos = ref<Servico[]>([]);

interface Servico {
  id: any;
  servico: string;
  icone: string;
}

onMounted(() => {
    getApi('servicos', false).then((response) => {
        servicos.value = response.data;
    });
});
</script>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Servicos',
});
</script>

<template>
    <h6>Serviços</h6>
    <div class="row mb-2">
        <div class="col" v-for="(servico, index) in servicos" :key="index">
            <router-link :to="`/home/servicos/${servico.id}`">
            <div class="card" style="width: 11rem;">
                <img :src="`/img/${servico.icone}`" alt="" class="card-img-top">
                <div class="card-body text-center">
                    <p class="card-text">{{ servico.servico }}</p>
                </div>
            </div>
            </router-link>
        </div>
    </div>
    <router-view class="mt-3"/> <!-- Router view default -->
    <router-view name="opcoes"/> <!-- Router view opcoes -->
    <router-view name="indicadores"/> <!-- Router view indicadores -->
</template>

<style scoped>
.img {
    width: 80px;
    height: 80px;
}
</style>