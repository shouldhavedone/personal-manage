<template>
  <div class="avatar-wrapper fl-ac">
    <el-avatar :size="28" :src="circleUrl" />
    <el-dropdown>
      <span class="el-dropdown-link">
        <span class="avatar-name">admin</span>
        <el-icon><CaretBottom /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>首页</el-dropdown-item>
          <el-dropdown-item>个人设置</el-dropdown-item>
          <el-dropdown-item divided>菜单配置</el-dropdown-item>
          <el-dropdown-item @click="drawer = true">系统配置</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-drawer v-model="drawer" size="300px">
      <template #header="{ titleId, titleClass }">
        <div :id="titleId" :class="titleClass">系统配置</div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from "vue";
import { CaretBottom } from "@element-plus/icons-vue";

const state = reactive({
  circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
});

const drawer = ref(false);

const { circleUrl } = toRefs(state);
</script>

<style lang="scss" scoped>
.avatar-wrapper {
  margin: 0 16px;

  .avatar-name {
    margin: 0 8px;
    font-size: 14px;
    color: #606266;
    cursor: pointer;
  }
}
</style>
