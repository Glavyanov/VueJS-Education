import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import AutoComplete from "primevue/autocomplete";
import VueRouter from "@/router/index";

import "./assets/app.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);
const pinia = createPinia();

app.use(VueRouter);
app.use(PrimeVue);
app.use(ToastService);
app.use(pinia);
app.component("InputText", InputText);
app.component("ButtonBase", Button);
app.component("ToastBase", Toast);
app.component("AutoComplete", AutoComplete);

app.mount("#app");
