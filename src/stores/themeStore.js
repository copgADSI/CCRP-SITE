import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useThemeStore = defineStore("theme", () => {
    const isDark = ref(localStorage.getItem("theme") === "dark");

    // Aplicar el tema guardado al cargar la app
    const applyTheme = () => {
        const theme = isDark.value ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    };

    // Función para alternar entre temas
    const toggleTheme = () => {
        isDark.value = !isDark.value;
        applyTheme();
    };

    // Ver cambios en `isDark` y aplicar el tema automáticamente
    watch(isDark, applyTheme, { immediate: true });

    return { isDark, toggleTheme };
});
