import { createRouter, createWebHistory } from "vue-router";

import AboutUs from "./pages/AboutUs.vue"; // Importa la componente aboutUs
import Contact from "./pages/Contact.vue"; // Importa la componente contact
import HomePage from "./pages/HomePage.vue"; // Importa la componente homepage
import NotFound from "./pages/NotFound.vue";  // Importa la componente NotFound

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "HomePage",
            component: HomePage,
        },
        {
            path: "/About",
            name: "AboutUs",
            component: AboutUs,
        },
        {
            path: "/Contact",
            name: "Contact",
            component: Contact,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: NotFound
        },
    ],
});

export { router };
