<template>
    <div class="container">
        <h4>Contribuyendes Reyes Patria</h4>
        <div class="row">
            <SingleContributor v-for="item in 7" :key="item" />
            <div class="col-md-3 col-sm-12">
                <div class="card p-3">
                    <div class="card-body text-center text-muted fw-bold">
                        ¿Quieres ser contribuyente?
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import SingleContributor from './SingleContributor.vue';

</script>