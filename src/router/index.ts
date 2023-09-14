import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomePage.vue";
import Show from "@/views/ShowDetails.vue";
import NotFound from "@/views/NotFound.vue";

export const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/shows/:id",
			name: "show",
			component: Show,
		},
		{
			path: "/:catchAll(.*)",
			name: "NotFound",
			component: NotFound,
		},
	],
});

export default router;
