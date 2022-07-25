<template>
  <div class="project-menu">
    <el-menu
      :default-active="activeIndex"
      class="project-menu-list"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">博客系统</el-menu-item>
      <el-menu-item index="3">Info</el-menu-item>
      <el-menu-item index="4">Orders</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const activeIndex = ref("1");

const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.project-menu {
  height: $headerHeader;

  .project-menu-list {
    height: 100%;
    border-bottom: none;
  }
}
</style>
