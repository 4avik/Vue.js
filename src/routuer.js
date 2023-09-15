import {createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/", /*index.html*/
        name: "home", 
        component: () => import("./App/vue"),
    },
];

const router = createRouter({
    history: createWebHistory,
    routes: routes,
});