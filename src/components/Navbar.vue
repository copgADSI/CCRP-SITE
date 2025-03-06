<template>
  <nav
    class="navbar navbar-expand-lg position-sticky top-0 shadow-sm"
    v-bind:class="{ 'bg-dark': isDark, 'bg-light': !isDark }"
    style="z-index: 1000"
  >
    <div class="container-fluid">
      <div class="d-flex align-items-center">
        <!-- Logo -->
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img src="/assets/media/logo.png" alt="Logo" class="logo m-1" />
        </a>
        <div style="user-select: none; cursor: pointer">
          <div class="title d-one d-md-block">
            <span>Colegio Cooperativo</span>
            <br />
            <span>Reyes Patria</span>
          </div>
          <div class="phrase text-center d-none d-md-block">
            <small style="font-size: 12px" class="text-muted-custom"
              >"Un colegio bendecido por Dios"</small
            >
          </div>
        </div>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav align-items-center ms-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Nosotros
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Horizonte</a></li>
              <li><a class="dropdown-item" href="#">Símbolos</a></li>
              <li><a class="dropdown-item" href="#">Documentación</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Comunidad Educativa
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">Consejo administrativo</a>
              </li>
              <li><a class="dropdown-item" href="#">Delegados</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Institucional
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Ejes temáticos</a></li>
              <li><a class="dropdown-item" href="#">Prog evaluaciones</a></li>
              <li>
                <a class="dropdown-item" href="#"
                  >Listado útiles {{ currentYear }}
                </a>
              </li>
            </ul>
          </li>
          <!-- Ajuste para dropdowns en los extremos -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Vita Vidas
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <a class="dropdown-item" href="#">Inteligencia emocional</a>
              </li>
              <li><a class="dropdown-item" href="#">Red papaz</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              ESAL
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="#">Formas de pago</a></li>
              <li>
                <a class="dropdown-item" href="#">Documentación de pago</a>
              </li>
            </ul>
          </li>
          <div class="d-flex flex-row">
            <div class="d-flex flex-row flex-column">
              <!-- toggle theme -->
              <button @click="themeStore.toggleTheme" class="theme-toggle btn">
                <Sun v-if="!isDark" />
                <Moon v-else />
              </button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Moon, Sun } from "lucide-vue-next";
import { storeToRefs } from "pinia";
import { useThemeStore } from "../stores/themeStore";

const currentYear = new Date().getFullYear();
const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);
</script>
<style scoped>
.logo {
  height: 3.5em;
  transition: 0.3s ease-in-out;
}

.title {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  transition: 0.3s ease-in-out;
}

.title:hover {
  transform: scale(1.02);
}

.logo:hover {
  transform: scale(1.02);
}

.phrase {
  font-weight: 400;
  font-size: medium;
}

.theme-toggle {
  display: flex;
  border: none;
  cursor: pointer;
  font-size: 20px;
  background: transparent;
  padding: 5px;
  transition: all 0.3s;
}

.theme-toggle:hover {
  transform: scale(1.1);
}

/* Aplicar cambios globales */
html[data-theme="dark"] {
  background-color: #1e1e1e !important;
  color: white !important;
}

html[data-theme="light"] {
  background-color: #ffffff !important;
  color: black !important;
}

/* Estilos para navbar */
.navbar {
  transition: background-color 0.3s, color 0.3s;
}

/* Estilos para dropdown en dispositivos pequeños */
@media (max-width: 992px) {
  .dropdown-menu {
    position: static !important;
    width: 100%;
    text-align: center;
  }
}

.years-container {
  font-family: var(--rp-marker-font);
  font-weight: bold;
  display: inline-block;
  position: relative;
}

.number {
  font-size: 20px;
  color: var(--rp-yellow);
  position: relative;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
}

.text {
  font-size: 13px;
  color: var(--rp-blue);
  text-transform: uppercase;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
}
</style>
