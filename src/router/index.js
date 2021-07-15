import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index.vue";
// import Main from "../views/home/mainBorad.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    meta: { hidden: true },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
    meta: { title: "登录", hidden: true },
  },
  {
    path: "/home",
    name: "home",
    redirect: "/dataShow",
    component: Home,
    meta: {
      title: "首页",
      hidden: false,
      icon: "el-icon-s-home",
    },
    children: [
      {
        path: "/dataShow",
        name: "dataShow",
        component: () => import("../views/home/dataShow.vue"),
        meta: {
          title: "数据统计",
          hidden: true,
        },
      },
    ],
  },

  {
    path: "/merchantAdmin",
    name: "merchantAdmin",
    component: Home,
    meta: {
      title: "商户管理",
      hidden: false,
      icon: "el-icon-s-shop",
    },
    children: [
      {
        path: "/merchantAdmin/merchants",
        name: "merchants",
        component: () => import("../views/merchantAdmin/merchants.vue"),
        meta: {
          title: "商户列表",
          hidden: false,
          icon: "el-icon-menu",
        },
      },
      {
        path: "/merchantAdmin/complaints",
        name: "complaints",
        component: () => import("../views/merchantAdmin/complaints.vue"),
        meta: {
          title: "投诉处理",
          hidden: false,
          icon: "el-icon-menu",
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
