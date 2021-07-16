<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <div class="logo">
          <img src="../../assets/logo.png" alt="" />try一try
        </div>
        <el-menu
          :default-active="this.$route.path"
          class="el-menu-vertical-demo"
          background-color="#52575c"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <subMenuItem
            v-for="(item, idx) in routes"
            :subroute="item"
            :barIdx="idx"
            :key="idx"
          ></subMenuItem>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item
              v-for="(item, index) in breadList"
              :key="index"
              :to="{ path: item.path }"
              replace
              >{{ item.meta.title }}</el-breadcrumb-item
            >
          </el-breadcrumb>
          <div class="user-info">
            <img src="../../assets/head.png" alt="" />
            <span>admin</span>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import subMenuItem from "../../components/subMenuItem.vue";
export default {
  components: {
    subMenuItem,
  },
  data() {
    return {
      routes: [],
      breadList: [], // 面包屑路由集合
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  methods: {
    isHome(route) {
      return route.name === "home";
    },
    getBreadcrumb() {
      let matched = this.$route.matched;
      //如果不是首页
      if (!this.isHome(matched[0])) {
        matched = [{ path: "/", meta: { title: "首页" } }].concat(matched);
      }
      this.breadList = matched;
    },
  },
  mounted() {
    this.getBreadcrumb();
    this.routes = this.$router.options.routes;
  },
};
</script>

<style lang="less" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  background-color: #f0f0f0;
  border-bottom: 2px solid #ddd;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-breadcrumb {
  line-height: unset;
}

.user-info {
  display: flex;
  align-items: center;
  img {
    width: 30px;
    height: 30px;
  }
  span {
    margin-left: 10px;
  }
}

.el-aside {
  background-color: #52575c;
  color: rgb(167, 162, 162);
  text-align: center;
  height: 100vh;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 28px;
  color: #fff;
  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
}

.el-menu {
  border: none;
  text-align: left;
}

.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
