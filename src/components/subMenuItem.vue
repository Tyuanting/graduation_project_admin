<template>
  <div>
    <!-- 如果当前 subroute 有子节点 -->
    <el-submenu
      v-if="
        !subroute.meta.hidden &&
        subroute.children &&
        subroute.children.length > 1
      "
      :index="subroute.path"
    >
      <!-- 创建菜单分组 -->
      <template slot="title">
        <i :class="subroute.meta.icon"></i>
        <span slot="title">{{ subroute.meta.title }}</span>
      </template>

      <!-- 递归调用自身，直到 subroute 不含子节点 -->
      <subMenuItem
        v-for="(submenu, subidx) in subroute.children"
        :subroute="submenu"
        :key="barIdx + '-' + subidx"
      />
    </el-submenu>

    <el-menu-item
      style="font-weight: 400"
      v-else-if="
        !subroute.meta.hidden &&
        subroute.children &&
        subroute.children.length == 1
      "
      :index="subroute.path"
      ><i :class="subroute.meta.icon"></i>
      <span slot="title">{{ subroute.meta.title }}</span>
    </el-menu-item>

    <!-- 当前节点不含子节点且非隐藏 -->
    <el-menu-item
      style="font-weight: 400"
      v-else-if="!subroute.meta.hidden"
      :index="subroute.path"
    >
      <i :class="subroute.meta.icon"></i>
      <span slot="title">{{ subroute.meta.title }}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: "subMenuItem",
  props: {
    subroute: {
      type: Object,
    },
    barIdx: {
      type: [String, Number],
    },
    fatherpath: {
      type: String,
    },
  },
  computed: {
    // 默认激活的路由, 用来激活菜单选中状态
    defaultActive: function () {
      return this.$route.path;
    },
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
