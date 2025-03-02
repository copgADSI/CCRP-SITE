<template>
    <Slides />
    <section v-bind:class="{'bg-dark': isDark}" style="margin-top: 100px;">
        <AboutUs />
    </section>
    <section style="margin-top: 80px;">
        <WhyChooseUs />
    </section>
    <section v-bind:class="{'bg-dark': isDark}" style="margin-top: 80px;">
        <News />
    </section>
    <section style="margin-top: 80px;">
        <Contributors />
    </section>
</template>
<script setup>
import AboutUs from '../../components/AboutUs.vue';
import Contributors from '../../components/Contributors.vue';
import News from '../../components/News.vue';
import Slides from '../../components/Slides.vue';
import WhyChooseUs from '../../components/WhyChooseUs.vue';
import { storeToRefs } from "pinia";
import { useThemeStore } from '../../stores/themeStore';
const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);
</script>