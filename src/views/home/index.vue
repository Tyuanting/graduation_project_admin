<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <div class="logo">
          <img src="../../assets/logo.png" alt="" />try一try
        </div>
        <el-menu
          default-active="/dataShow"
          class="el-menu-vertical-demo"
          background-color="#52575c"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <!-- <el-menu-item index="/dataShow">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="/merchantAdmin">
            <template slot="title">
              <i class="el-icon-s-shop"></i>
              <span>商户管理</span>
            </template>

            <el-menu-item index="/merchantAdmin/merchants">
              <i class="el-icon-menu"></i>
              <span slot="title">商户列表</span>
            </el-menu-item>
            <el-menu-item index="/merchantAdmin/complaints">
              <i class="el-icon-menu"></i>
              <span slot="title">投诉处理</span>
            </el-menu-item>
          </el-submenu>

          <el-menu-item index="/">
            <i class="el-icon-s-custom"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="/">
            <i class="el-icon-document"></i>
            <span slot="title">商品管理</span>
          </el-menu-item>
          <el-menu-item index="/">
            <i class="el-icon-document"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-menu-item index="/">
            <i class="el-icon-document"></i>
            <span slot="title">出货看单</span>
          </el-menu-item>
          <el-menu-item index="/">
            <i class="el-icon-setting"></i>
            <span slot="title">平台设置</span>
          </el-menu-item> -->
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
    };
  },
  mounted() {
    console.log(this.$router.options.routes);
    this.routes = this.$router.options.routes;
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #f0f0f0;
  border-bottom: 2px solid #ddd;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.user-info {
  display: flex;
  justify-content: flex-end;
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
