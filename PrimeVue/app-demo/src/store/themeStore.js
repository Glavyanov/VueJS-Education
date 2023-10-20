import { defineStore } from "pinia";

export const useThemeStore = defineStore("themeStore", {
    state: () =>({
        isDark: true,
        icon: 'pi pi-sun',
    })
});