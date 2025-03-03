<template>
  <footer class="text-white text-center border-top mt-4 p-3">
    <div class="container">
      <div class="d-flex flex-column flex-sm-row justify-content-between  my-4">
        <div class="d-flex flex-column flex-sm-row align-items-center">
          <a href="#" class="fw-bold text-decoration-none text-muted"><small>Colegio Cooperativo Reyes
              Patria</small></a>
          <a href="#"
            class="fw-bold text-decoration-none text-muted  mx-sm-4 my-1 my-sm-0"><small>Contáctenos</small></a>
          <a href="#" class="fw-bold  text-decoration-none text-muted mx-sm-4 my-1 my-sm-0"><small>Preguntas
              frecuentes</small></a>
        </div>
        <div class="d-flex justify-content-center mt-2 mt-sm-0">
          <Facebook class="fb fw-bold text-decoration-none text-muted mx-1" size="20"/>
          <Instagram class="ins fw-bold text-decoration-none text-muted mx-1" size="20" />
          <X class="x fw-bold text-decoration-none text-muted mx-1" size="22"/>
        </div>
      </div>
      <p class="fw-semibold text-muted"><small>© {{ new Date().getFullYear() }} - Todos los derechos reservados</small>
      </p>
    </div>
  </footer>
</template>


<script setup>
import { Facebook, Instagram, X } from 'lucide-vue-next';


</script>

<style scoped> 
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