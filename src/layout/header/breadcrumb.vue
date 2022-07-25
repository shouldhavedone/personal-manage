<template>
  <div class="breadcrumb-wrapper fl-ac">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">一级菜单</a></el-breadcrumb-item>
      <el-breadcrumb-item>二级菜单</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
</script>

<style lang="scss" scoped>
.breadcrumb-wrapper {
  height: 100%;
}
</style>
