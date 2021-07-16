import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index.vue";

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
//解决路由重复报错问题
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/dataShow",
    meta: { hidden: true },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
    meta: { title: "登录", hidden: true },
  },
  {
    path: "/dataShow",
    name: "home",
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
    path: "/merchantAdmin/merchants",
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

  {
    path: "/userAdmin/userList",
    name: "userAdmin",
    component: Home,
    meta: {
      title: "用户管理",
      hidden: false,
      icon: "el-icon-s-custom",
    },
    children: [
      {
        path: "/userAdmin/userList",
        name: "userList",
        component: () => import("../views/userAdmin/userList.vue"),
        meta: {
          title: "用户列表",
          hidden: true,
          icon: "el-icon-menu",
        },
      },
    ],
  },

  {
    path: "/productAdmin",
    name: "productAdmin",
    component: Home,
    meta: {
      title: "商品管理",
      hidden: false,
      icon: "el-icon-s-goods",
    },
    children: [
      {
        path: "/productAdmin/products",
        name: "products",
        component: () => import("../views/productAdmin/products.vue"),
        meta: {
          title: "商品列表",
          hidden: false,
          icon: "el-icon-menu",
        },
      },
      {
        path: "/productAdmin/illegalCheck",
        name: "illegalCheck",
        component: () => import("../views/productAdmin/illegalCheck.vue"),
        meta: {
          title: "违规审核",
          hidden: false,
          icon: "el-icon-menu",
        },
      },
    ],
  },

  {
    path: "/orderAdmin/orderList",
    name: "orderAdmin",
    component: Home,
    meta: {
      title: "订单管理",
      hidden: false,
      icon: "el-icon-s-order",
    },
    children: [
      {
        path: "/orderAdmin/orderList",
        name: "orderList",
        component: () => import("../views/orderAdmin/orderList.vue"),
        meta: {
          title: "订单列表",
          hidden: true,
          icon: "el-icon-menu",
        },
      },
    ],
  },

  {
    path: "/setting",
    name: "setting",
    component: Home,
    meta: {
      title: "系统管理",
      hidden: false,
      icon: "el-icon-s-tools",
    },
    children: [
      {
        path: "/setting/systemSet",
        name: "orderList",
        component: () => import("../views/setting/systemSet.vue"),
        meta: {
          title: "系统设置",
          hidden: false,
          icon: "el-icon-menu",
        },
      },
      {
        path: "/setting/doneLog",
        name: "doneLog",
        component: () => import("../views/setting/doneLog.vue"),
        meta: {
          title: "操作日志",
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
