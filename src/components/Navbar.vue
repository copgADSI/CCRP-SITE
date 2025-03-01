<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary position-sticky top-0" style="z-index: 1000;">
        <div class="container-fluid">
            <!-- Logo -->
            <a class="navbar-brand d-flex align-items-center" href="#">
                <img src="/assets/media/logo.png" alt="Logo" class="logo me-2" />
                <span class="d-none d-md-block">Colegio Cooperativo Reyes Patria</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Nosotros
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Horizonte</a></li>
                            <li><a class="dropdown-item" href="#">Símbolos</a></li>
                            <li><a class="dropdown-item" href="#">Documentación</a></li>
                            <li><a class="dropdown-item" href="#">Pre Escolar</a></li>
                            <li><a class="dropdown-item" href="#">Primaria</a></li>
                            <li><a class="dropdown-item" href="#">Bachillerato</a></li>
                            <li><a class="dropdown-item" href="#">Otros Dependencias</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Comunidad Educativa
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Consejo administrativo</a></li>
                            <li><a class="dropdown-item" href="#">Delegados</a></li>
                            <li><a class="dropdown-item" href="#">Consejo directivo</a></li>
                            <li><a class="dropdown-item" href="#">Directivos</a></li>
                            <li><a class="dropdown-item" href="#">Consejo académico</a></li>
                            <li><a class="dropdown-item" href="#">Administrativos</a></li>
                            <li><a class="dropdown-item" href="#">Consejo estudiantil</a></li>
                            <li><a class="dropdown-item" href="#">Docentes</a></li>
                            <li><a class="dropdown-item" href="#">Servicios generales</a></li>
                            <li><a class="dropdown-item" href="#">Egresados</a></li>
                            <li><a class="dropdown-item" href="#">Estudiantes</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">Institucional</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Ejes temáticos</a></li>
                            <li><a class="dropdown-item" href="#">Prog evaluaciones</a></li>
                            <li><a class="dropdown-item" href="#">Listado últiles {{ currentYear }} </a>
                            </li>
                            <li><a class="dropdown-item" href="#">Prospecto</a></li>
                            <li><a class="dropdown-item" href="#">Horarios</a></li>
                            <li><a class="dropdown-item" href="#">Circulares</a></li>
                            <li><a class="dropdown-item" href="#">Revista</a></li>
                            <li><a class="dropdown-item" href="#">Galería</a></li>
                            <li><a class="dropdown-item" href="#">Proyectos</a></li>
                            <li><a class="dropdown-item" href="#">Notificias</a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">Vita Vidas</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Inteligencia emocional</a></li>
                            <li><a class="dropdown-item" href="#">Red papaz</a></li>
                            <li><a class="dropdown-item" href="#">Familias fuertes</a></li>
                            <li><a class="dropdown-item" href="#">Padres de familia</a></li>
                            <li><a class="dropdown-item" href="#">Bienestar</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">ESAL</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Formas de pago</a></li>
                            <li><a class="dropdown-item" href="#">Documentación de pago</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>
const currentYear = new Date().getFullYear();
</script>
<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
</style>