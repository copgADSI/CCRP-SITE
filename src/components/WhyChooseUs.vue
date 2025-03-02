<template>
    <div class="container" style="user-select: none;">
        <div class="row">
            <div class="col-md-6 col-sm-12 text-center align-self-center mb-4">
                <h1 class="why-us-title">
                    ¿Por qué elegirnos?
                </h1>
            </div>
            <div class="col-md-6 col-sm-12 align-self-center text-center">
                <div class="row align-items-center">
                    <!-- Ícono: Primero en sm, último en md+ -->
                    <div class="col text-center align-self-center order-sm-first order-md-last">
                        <CheckCircle class="icon" size="40" />
                    </div>
                    <!-- Texto: Último en sm, primero en md+ -->
                    <div class="col-md-10 col-sm-12 order-sm-last order-md-first">
                        <p class="fw-medium fw-semi-bold mb-3">
                            Nuestra educación se basa en un modelo de amor enfocado en el desarrollo integral de niños y
                            jóvenes.
                        </p>
                    </div>
                </div>

                <div class="row align-items-center">
                    <!-- Ícono: Primero en sm, último en md+ -->
                    <div class="col text-center align-self-center order-sm-first order-md-last">
                        <GraduationCap class="icon" size="40" />
                    </div>
                    <!-- Texto: Último en sm, primero en md+ -->
                    <div class="col-md-10 col-sm-12 order-sm-last order-md-first">
                        <p class="fw-medium fw-semi-bold mb-3">
                            Nuestro modelo educativo se basa en una metodología innovadora, alineada con los avances
                            científicos, tecnológicos y humanistas, fundamentada en la urbanidad y la libertad.
                        </p>
                    </div>
                </div>

                <div class="row align-items-center">
                    <!-- Ícono: Primero en sm, último en md+ -->
                    <div class="col text-center align-self-center order-sm-first order-md-last">
                        <Telescope class="icon" size="40" />
                    </div>
                    <!-- Texto: Último en sm, primero en md+ -->
                    <div class="col-md-10 col-sm-12 order-sm-last order-md-first">
                        <p class="fw-medium fw-semi-bold mb-3">
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
.why-us-title {
    transition: 0.3s ease-in-out;
    color: var(--rp-blue);
}

.why-us-title:hover {
    transform: scale(1.02);
    color: var(--rp-purple);

}

.icon {
    color: var(--rp-green);
    transition: 0.3s ease-in-out;
}

.icon:hover { 
    transform: scale(1.04);
    color: var(--rp-purple);
}

p {
    transition: 0.3s ease-in-out;
}

p:hover {
    transform: scale(1.01);
}

</style>