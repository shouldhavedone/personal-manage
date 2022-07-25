<template>
  <div class="public-operate fl-c">
    <div>
      <el-icon><Search /></el-icon>
    </div>
    <div><el-color-picker v-model="color" size="small" /></div>
    <div>
      <img src="../../assets/images/fullscreen-shrink.png" alt="全屏" />
      <!-- <img src="../../assets/images/fullscreen-expand.png" alt="缩小" /> -->
    </div>
    <div>
      <el-icon><BellFilled /></el-icon>
    </div>
    <div>
      <el-icon><Sunny /></el-icon>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { Search, BellFilled, Sunny } from "@element-plus/icons-vue";

const color = ref("409EFF");
</script>

<style lang="scss" scoped>
.public-operate {
  cursor: pointer;
  & > div {
    width: var(--g-icon-size);
    height: var(--g-icon-size);
    margin: 0 5px;

    .el-icon {
      width: var(--g-icon-size);
      height: var(--g-icon-size);
    }

    img {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 4px;
    }
  }
}
</style>
