<template>
    <div class="container col-md-3 col-sm-12 my-2">
        <div class="card-container card p-3">
            <div class="card-body text-center">
                <span class="fw-semibold text-muted-custom">
                    Ejemplo contribuyente
                </span>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .card-container { 
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }

    .container {
        user-select: none;
    }

    .card-container:hover {
        transform: scale(1.03);
        border: 0.5px solid var(--rp-blue)
    }
    
</style>
<script setup>
</script>