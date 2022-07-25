<template>
  <div class="sidebar-layout">
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <!-- <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>首页</template>
      </el-menu-item> -->
      <transition-group name="sub-sidebar">
        <!-- <template v-for="(route, index) in menuStore.sidebarMenus">
          <SidebarItem
            v-if="route.meta.sidebar !== false"
            :key="route.path || index"
            :item="route"
            :base-path="route.path"
          />
        </template> -->
      </transition-group>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isCollapse = ref(false);
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.sidebar-layout {
  width: $sidebarWidth;
  height: 100%;
  overflow-y: auto;
  background-color: $bgDefault;

  .el-menu-vertical {
    height: 100%;
  }
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
