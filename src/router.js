import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import List from "./views/list.vue";
import Detail from "./views/detail.vue";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            children: [
                {
                    path: "/list",
                    name: "list",
                    component: List
                },
                {
                    path: "/detail/:id",
                    name: "detail",
                    component: Detail,
                    props: true,
                    meta: {
                        auth: true
                    }
                }
            ]
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "about" */ "./views/About.vue")
        }
    ]
});

// 全局守卫
router.beforeEach((to, from, next) => {
    if (to.meta.auth && !window.isLogin) {
        if (window.confirm("请登录")) {
            window.isLogin = true;
            next();
        } else {
            window.isLogin = false;
            next("/");
        }
    } else {
        next();
    }
});
export default router;
