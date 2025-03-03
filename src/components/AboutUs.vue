<template>
    <hr>
    <section class="about-section"> 
        <div class="container" style="user-select: none;">  
            <div class="row align-items-center">
                <!-- Imagen ocupa todo el espacio disponible -->
                <div class="col-md-6">
                    <div class="image-container">
                        <img src="/assets/media/CCRP.jpg" alt="Colegio Cooperativo Reyes Patria" class="img-full" />
                    </div>
                </div>

                <!-- Contenido con animación -->
                <div class="col-md-6 text-center text-md-start content">
                    <h1 class="animated-title">Nosotros</h1>
                    <p class="animated-text text-muted">
                        Somos una institución educativa que forma estudiantes integralmente en ética, intelecto, medio
                        ambiente, comunicación, físico y socio-afectivo, mediante una metodología innovadora y acorde
                        con
                        los avances científicos y humanistas.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <hr>
</template>

<style scoped>
/* Sección con espacio y diseño responsivo */
.about-section {
    padding: 3rem 0;
}

/* Contenedor de la imagen para ocupar todo el espacio */
.image-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Imagen ocupa todo el campo disponible */
.img-full {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
}

/* Efecto zoom en hover */
.img-full:hover {
    transform: scale(1.01);
}

/* Contenido alineado */
.content {
    padding: 2rem;
}

/* Animación de entrada */
.animated-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--bs-body-color);
    opacity: 0;
    transform: translateY(-20px);
    animation: fadeInUp 0.8s ease-out forwards;
}

.animated-text {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--bs-body-color);
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 1s ease-out forwards 0.3s;
}

/* Keyframes para animación */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive: en móviles la imagen va arriba */
@media (max-width: 768px) {
    .row {
        flex-direction: column-reverse;
    }

    .content {
        text-align: center;
        padding: 1.5rem;
    }
}
</style>
