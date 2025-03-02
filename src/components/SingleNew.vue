<template>
    <div class="card rounded-4 shadow my-2">
        <div class="card-header d-flex justify-content-between">
            <Heart size="20" class="cursor-pointer" :fill="props.new.liked ? 'red' : 'none'"
                :class="{ 'text-danger': props.new.liked }" />
            <small class="fw-semi-bold text-danger"> {{ props.new.likes_count }} Me gusta </small>
        </div>
        <div class="card-body text-center">
            <span class="card-title fw-bold" v-bind:class="{ 'text-white': isDark, 'text-muted' : !isDark }">
                {{ props.new.title }}
            </span>
        </div>
        <div class="card-footer">
            <small class="fw-semi-bold"  v-bind:class="{ 'text-white': isDark, 'text-muted' : !isDark }">
                {{ props.new.date }}
            </small>
        </div>
    </div>
</template>
<script setup>
import { Heart } from 'lucide-vue-next';
import { storeToRefs } from "pinia";
import { useThemeStore } from '../stores/themeStore';
const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);

const props = defineProps({
    new: {
        type: Object,
        required: true,
        default: () => ({
            id: 1,
            title: '',
            date: '',
            likes_count: 0,
            liked: false
        })
    }
})

</script>
