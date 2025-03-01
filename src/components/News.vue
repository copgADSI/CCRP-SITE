<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-sm-12">
                <small class="text-muted fw-bold mb-3">
                    Últimas noticias Reyes Patria
                </small>
                <div class="container-fluid p-0">
                    <div class="row">
                        <div v-for="item in news" :key="item.id" class="col-md-4 col-sm-12">
                            <SingleNew :new="item" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 co-sm-12 align-self-center text-center">
                <h1>
                    ¡Descubre las noticias que transforman a esta gran comunidad!
                </h1>
            </div>
        </div>
    </div>
</template>
<script setup>

import { ref } from 'vue';
import SingleNew from './SingleNew.vue';

const news = ref([
    {
        id: 1,
        title: "Nueva sede de Reyes Patria",
        date: "Sábado 20 de enero de 2023",
        likes_count: 1312,
        liked: false
    },
    {
        id: 2,
        title: "Nueva sede de Reyes Patria",
        date: "Sábado 20 de enero de 2023",
        likes_count: 2412,
        liked: false
    },
    {
        id: 3,
        title: "Nueva sede de Reyes Patria",
        date: "Sábado 20 de enero de 2023",
        likes_count: 1312,
        liked: false
    },
    {
        id: 4,
        title: "Nueva sede de Reyes Patria",
        date: "Sábado 20 de enero de 2023",
        likes_count: 2312,
        liked: true
    },
])

</script>