import { defineStore } from "pinia";
import { ref } from 'vue';

export const useThemeStore = defineStore("themeStore", () => {
    const isDark = ref(true);
    const icon = ref("pi pi-sun");

    return {
        isDark,
        icon,
    }
});