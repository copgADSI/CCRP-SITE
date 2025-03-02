<template>
    <div class="container" style="user-select: none;">
        <div class="row">
            <!-- Título -->
            <div class="col-md-6 col-sm-12 text-center align-self-center mb-4">
                <h1 >¿Por qué elegirnos?</h1>
            </div>

            <div class="col-md-6 col-sm-12 align-self-center text-center">
                <!-- Sección de características -->
                <div class="row align-items-center feature">
                    <div class="col text-center align-self-center order-sm-first order-md-last">
                        <CheckCircle class="icon" size="40" />
                    </div>
                    <div class="col-md-10 col-sm-12 order-sm-last order-md-first">
                        <p>
                            Nuestra educación se basa en un modelo de amor enfocado en el desarrollo integral de niños y
                            jóvenes.
                        </p>
                    </div>
                </div>

                <div class="row align-items-center feature">
                    <div class="col text-center align-self-center order-sm-first order-md-last">
                        <GraduationCap class="icon" size="40" />
                    </div>
                    <div class="col-md-10 col-sm-12 order-sm-last order-md-first">
                        <p>
                            Nuestro modelo educativo se basa en una metodología innovadora, alineada con los avances
                            científicos, tecnológicos y humanistas, fundamentada en la urbanidad y la libertad.
                        </p>
                    </div>
                </div>

                <div class="row align-items-center feature">
                    <div class="col text-center align-self-center order-sm-first order-md-last">
                        <Telescope class="icon" size="40" />
                    </div>
                    <div class="col-md-10 col-sm-12 order-sm-last order-md-first">
                        <p>
                            Nuestro modelo educativo se basa en una metodología innovadora, alineada con los avances
                            científicos, tecnológicos y humanistas, fundamentada en la urbanidad y la libertad.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { GraduationCap, CheckCircle, Telescope } from 'lucide-vue-next';
</script>

<style scoped>
/* Título */
.why-us-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--rp-blue);
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}

.why-us-title:hover {
    transform: scale(1.05);
    color: var(--rp-purple);
}

/* Íconos */
.icon {
    color: var(--rp-green);
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}

.icon:hover {
    transform: scale(1.1);
    color: var(--rp-purple);
}

/* Contenedor de cada característica */
.feature {
    padding: 1rem;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.feature:hover {
    transform: scale(1.02);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
}

/* Texto */
p {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--bs-body-color);
    transition: transform 0.3s ease-in-out;
}

p:hover {
    transform: scale(1.02);
}
</style>
