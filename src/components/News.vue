<template>
    <hr aria-hidden="true">
    <div class="container py-5" style="user-select: none;">
        <div class="row align-items-center">
            <!-- Sección de Título / Mensaje (Primero en sm, segundo en md+) -->
            <div
                class="col-md-6 col-sm-12 text-center order-sm-first order-md-last d-flex flex-column align-items-center">
                <h1 class="news-title" style="color: var(--rp-blue);">
                    ¡Descubre las noticias que transforman a esta gran comunidad!
                </h1>
            </div>

            <!-- Sección de Noticias -->
            <div class="col-md-6 col-sm-12 order-sm-last order-md-first">
                <small class="fw-bold d-block mb-3 text-muted-custom" >
                    Últimas noticias Reyes Patria
                </small>
                <div class="row g-3">
                    <div v-for="item in news" :key="item.id" class="col-md-4 col-sm-6">
                        <SingleNew :new="item" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr aria-hidden="true">
</template>



<script setup>

import { ref } from 'vue';
import SingleNew from './SingleNew.vue';

const news = ref([
    {
        id: 1,
        title: "Ejemplo de noticia aquí",
        date: "Sábado 20 de enero de 2023",
        likes_count: 1312,
        liked: false
    },
    {
        id: 2,
        title: "Ejemplo de noticia aquí",
        date: "Sábado 20 de enero de 2023",
        likes_count: 2412,
        liked: false
    },
    {
        id: 3,
        title: "Ejemplo de noticia aquí",
        date: "Sábado 20 de enero de 2023",
        likes_count: 1312,
        liked: false
    },
    {
        id: 4,
        title: "Ejemplo de noticia aquí",
        date: "Sábado 20 de enero de 2023",
        likes_count: 2312,
        liked: true
    },
    {
        id: 5,
        title: "Ejemplo de noticia aquí",
        date: "Sábado 20 de enero de 2023",
        likes_count: 1312,
        liked: false
    },
    {
        id: 6,
        title: "Ejemplo de noticia aquí",
        date: "Sábado 20 de enero de 2023",
        likes_count: 1312,
        liked: false
    }
])

</script>