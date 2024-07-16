import { createRouter, createWebHistory } from "vue-router";

import aboutUs from "./pages/aboutUs.vue"; // Importa la componente aboutUs
import contact from "./pages/contact.vue"; // Importa la componente contact
import homepage from "./pages/homepage.vue"; // Importa la componente homepage
import NotFound from "./pages/NotFound.vue";  // Importa la componente NotFound

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "homepage",
            component: homepage,
        },
        {
            path: "/about",
            name: "aboutUs",
            component: aboutUs,
        },
        {
            path: "/contact",
            name: "contact",
            component: contact,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: NotFound
        },
    ],
});

export { router };
