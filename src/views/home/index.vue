<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <div class="logo">
          <img src="../../assets/logo.png" alt="" />试一试的后台
        </div>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#52575c"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
}

.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
