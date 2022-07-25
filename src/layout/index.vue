<template>
  <div class="layout-wrapper">
    <header-layout></header-layout>
    <el-container class="content-wrapper">
      <sidebar-layout></sidebar-layout>
      <content-layout></content-layout>
    </el-container>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import HeaderLayout from "./header";
import SidebarLayout from "./sidebar";
import ContentLayout from "./content";
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.layout-wrapper {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .content-wrapper {
    height: calc(100% - #{$headerHeader});
  }
}
</style>
