<template>
  <div class="container">
    <h4>Contribuyentes Reyes Patria</h4>
    <div class="row">
      <SingleContributor v-for="item in 7" :key="item" />
      <div class="col-md-3 col-sm-12">
        <div class="card-container card p-3">
          <div class="card-body text-center">
            <span class="be-a-contribuyent fw-semibold" v-bind:class="{ 'text-white': isDark, 'text-muted' : !isDark}">
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
import { storeToRefs } from "pinia";
import { useThemeStore } from '../stores/themeStore';
const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);
</script>

<style>
.col-md-3 {
    margin-top: 7px !important;
}

.card-container {
    cursor: pointer;
    transition: 0.3s ease-in-out;
}

.card-container:hover {
    transform: scale(1.03);
}

.container {
    
  user-select: none;
}

span.be-a-contribuyent {
    font-size: 1.01rem;
    color: var(--rp-blue) !important;
}

h4 {
  color: var(--rp-blue) !important;
}
</style>
