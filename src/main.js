import "./sass/main.scss";
// import "tailwindcss/tailwind.css";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import "@fortawesome/fontawesome-free/css/all.css";

library.add(faMoon, faSun);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);

app.mount("#app");
