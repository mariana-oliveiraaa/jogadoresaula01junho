import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TimesView from "../views/TimesView.vue";
import JogadoresView from "../views/JogadoresView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },

    {
      path: "/Times",
      name: "Times",
      component: TimesView,
    },
    {
      path: "/Jogadores",
      name: "Jogadores",
      component: JogadoresView,
    },
  ],
});

export default router;
