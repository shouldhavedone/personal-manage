<template>
  <div class="header-layout fl-ac">
    <div class="left-box">
      <!-- <span>项目管理平台</span> -->
      <img src="../../assets/images/OIP-C.jpg" alt="" />
    </div>
    <div class="right-box fl-jb">
      <div class="header-beead fl-ac">
        <div class="collapse-wrapper">
          <el-icon><Fold /></el-icon>
        </div>
        <breadcrumb></breadcrumb>
      </div>
      <div class="header-avatar fl-ac">
        <project-menu></project-menu>
        <div class="line"></div>
        <div class="public-wrapper fl-ac">
          <public-operate></public-operate>
          <user-avatar></user-avatar>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Breadcrumb from "./breadcrumb.vue";
import ProjectMenu from "./projectMenu.vue";
import PublicOperate from "./publicOperate.vue";
import UserAvatar from "./userAvatar.vue";
import { Fold } from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>

.header-layout {
  width: var(--g-header-width);
  height: var(--g-header-height);

  box-shadow: 0 4px 16px rgba($color: #000000, $alpha: 0.08);

  .left-box {
    width: var(--g-sub-sidebar-width);
    height: 100%;
    background-color: var(--g-background-color);

    img {
      width: var(--g-sub-sidebar-width);
    }
  }

  .right-box {
    flex: 1;
    // background: linear-gradient(to right, var(--g-background-color), #B5B5B6);

    .header-beead {
      .collapse-wrapper {
        display: inherit;
        margin: 0 12px;

        &:hover {
          .el-icon {
            color: var(--el-color-primary);
          }
        }
      }
    }

    .header-avatar {
      .line {
        width: 1px;
        height: 24px;
        margin: 0 12px;
        background: #ccc;
      }
    }
  }
}
</style>
