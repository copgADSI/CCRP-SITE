<template>
  <footer
    class="text-center border-top mt-4 p-3"
    v-bind:class="{ 'bg-dark': isDark, 'bg-light': !isDark }"
  >
    <div class="container">
      <div class="d-flex flex-column flex-sm-row justify-content-between my-4">
        <div
          class="fw-bold text-decoration-none d-flex flex-column flex-sm-row align-items-center"
        >
          <small class="sm-1 text-muted-custom">Colegio Cooperativo Reyes Patria</small>
          <small class="sm-2 text-muted-custom">Contáctenos</small>
          <small class="sm-2 text-muted-custom">Preguntas frecuentes</small>
        </div>
        <div class="d-flex justify-content-center mt-2 mt-sm-0">
          <Facebook class="fb text-muted-custom fw-bold text-decoration-none mx-1" size="20" />
          <Instagram class="ins text-muted-custom fw-bold text-decoration-none mx-1" size="20" />
          <X class="x text-muted-custom fw-bold text-decoration-none mx-1" size="22" />
        </div>
      </div>
      <p class="text-muted-custom fw-semibold">
        <small
          >© {{ new Date().getFullYear() }} - Todos los derechos
          reservados</small
        >
      </p>
    </div>
  </footer>
</template>

<script setup>
import { Facebook, Instagram, X } from "lucide-vue-next";
import { storeToRefs } from "pinia";
import { useThemeStore } from "../stores/themeStore";

const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);
</script>

<style scoped>
.sm-1, .sm-2, .sm-3 {
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.sm-1:hover, .sm-2:hover, .sm-3:hover {
  transform: scale(1.03);
  color: var(--rp-blue) !important;
}

.sm-1 {
  margin-right: 25px;
}

.sm-2 {
  margin-right: 25px;
}

.sm-3 {
  margin-right: 10px;
}

.fb {
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.fb:hover {
  transform: scale(1.1);
  color: var(--rp-blue) !important;
}

.ins {
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.ins:hover {
  transform: scale(1.1);
  color: var(--rp-blue) !important;
}

.x {
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.x:hover {
  transform: scale(1.1);
  color: var(--rp-blue) !important;
}
</style>
