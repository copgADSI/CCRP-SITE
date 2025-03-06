<template>
  <div class="container">
    <h4>Contribuyentes Reyes Patria</h4>
    <div class="row">
      <SingleContributor v-for="item in 7" :key="item" />
      <div class="col-md-3 col-sm-12">
        <div class="card-container card p-3" style="height: 92px">
          <div class="card-body text-center">
            <span class="be-a-contribuyent fw-semibold text-muted-custom">
              ¿Quieres ser contribuyente?
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import SingleContributor from "./SingleContributor.vue";
</script>

<style>
.col-md-3 {
  margin-top: 7px !important;
}

:root {
  --card-bg-color-light: #f8f9fa;
  --card-bg-color-dark: #343a40;
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  
}

.card-container:hover {
  transform: scale(1.03);
  border: 0.5px solid var(--rp-blue)
}

.container {
  user-select: none;
}

.be-a-contribuyent {
  font-size: 1.02rem;
  color: var(--rp-blue) !important;
}

h4 {
  color: var(--rp-blue) !important;
}
</style>
