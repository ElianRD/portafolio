import "./sass/main.scss";
// import "boxicons";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
// Agrega los iconos que necesitas usar
library.add(faCoffee, faMoon, faSun);

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);

app.mount("#app");
