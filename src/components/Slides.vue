<script setup>
import 'vue3-carousel/dist/carousel.css'
import { ref } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = ref({
    itemsToShow: 1, // Desktop
    snapAlign: 'center',
    wrapAround: true,
    breakpoints: {
        // Movil
        0: { itemsToShow: 1, snapAlign: 'center' },
        // Tablet
        768: { itemsToShow: 2, snapAlign: 'center' },
        // Desktop
        1024: { itemsToShow: 1, snapAlign: 'center' }
    }
})

const currentSlideIndex = ref(0)
</script>

<template>
    <div class="carousel-container my-4">
        <Carousel v-bind="carouselConfig" v-model="currentSlideIndex">
            <Slide v-for="(slide, index) in 5" :key="index">
                <div class="carousel__item" :class="{ active: index === currentSlideIndex }">
                    Imagen slider {{ slide + 1 }}
                </div>
            </Slide>

            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>
    </div>
</template>

<style scoped>
/* Contenedor general del carrusel */
.carousel-container {
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
    padding: 20px 0;
}

/* Estilos base para cada slide */
.carousel__item {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    transition: all 0.4s ease-in-out;
    background: white;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    border: 2px solid gray;
}

/* Estilo para el slide activo */
.carousel__item.active {
    transform: scale(1.1);
    box-shadow: 0px 8px 20px rgba(128, 0, 128, 0.4);
    border: 2px solid purple;
    border-width: 3px;
}

/* Estilos responsivos */
@media (max-width: 600px) {
    .carousel__item {
        width: 180px;
        height: 180px;
        font-size: 14px;
    }
}

@media (min-width: 601px) and (max-width: 1023px) {
    .carousel__item {
        width: 350px;
        height: 350px;
        font-size: 16px;
    }
}

@media (min-width: 1024px) {
    .carousel__item {
        width: 70%;
        height: 400px;
        font-size: 18px;
    }
}

/* Asegura que los elementos del carrusel no se superpongan */
.carousel-container :deep(.carousel__viewport) {
    overflow: visible;
}

/* Ajusta la posición de los slides */
.carousel-container :deep(.carousel__track) {
    display: flex;
    align-items: center;
}
</style>
