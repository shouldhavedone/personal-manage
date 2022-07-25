<template>
  <div class="sidebar-layout">
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <transition-group name="sub-sidebar">
        <template v-for="(route, index) in dynamicRoutes">
          <sidebar-item
            v-if="route.meta.sidebar !== false"
            :key="route.path || index"
            :item="route"
            :base-path="route.path"
          />
        </template>
      </transition-group>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SidebarItem from "./item.vue";

import { dynamicRoutes } from "@/router/routes";

console.log(dynamicRoutes);

const isCollapse = ref(false);
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.sidebar-layout {
  width: var(--g-sub-sidebar-width);
  height: 100%;
  overflow-y: auto;

  .el-menu-vertical {
    height: 100%;
  }

  // :deep(.el-menu) {
  //   &.menu-radius:not(.el-menu--collapse) {
  //     .sidebar-item {
  //       padding: 0 10px;

  //       &:first-child {
  //         padding-top: 10px;
  //       }

  //       &:last-child {
  //         padding-bottom: 10px;
  //       }
  //     }

  //     .el-menu--inline,
  //     .el-menu-item,
  //     .el-sub-menu__title {
  //       border-radius: 10px;
  //     }
  //   }
  // }
}

.sub-sidebar-enter-active {
  transition: opacity 0.3s, transform 0.3s;
}
.sub-sidebar-enter-from,
.sub-sidebar-leave-active {
  opacity: 0;
  transform: translateY(30px) skewY(10deg);
}
.sub-sidebar-leave-active {
  position: absolute;
}
</style>
