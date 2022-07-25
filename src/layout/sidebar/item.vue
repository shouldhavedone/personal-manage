<template>
  <div class="sidebar-item">
    <el-sub-menu
      v-if="item.path == undefined"
      :title="item.meta.title"
      :index="JSON.stringify(item)"
    >
      <template #title>
        <!-- <el-icon v-if="item.meta.icon" class="title-icon">
          <svg-icon :name="item.meta.icon" />
        </el-icon> -->
        <span class="title">{{ item.meta.title }}</span>
      </template>
      <template v-for="route in item.children">
        <SidebarItem
          v-if="route.meta.sidebar !== false"
          :key="route.path"
          :item="route"
        />
      </template>
    </el-sub-menu>
    <router-link
      v-else-if="!hasChildren"
      v-slot="{ href, navigate, isActive, isExactActive }"
      custom
      :to="resolveRoutePath(basePath, item.path)"
    >
      <a
        :href="
          isExternalLink(resolveRoutePath(basePath, item.path))
            ? resolveRoutePath(basePath, item.path)
            : href
        "
        :class="[
          isActive && 'router-link-active',
          isExactActive && 'router-link-exact-active',
        ]"
        :target="
          isExternalLink(resolveRoutePath(basePath, item.path)) ? '_blank' : '_self'
        "
        @click="navigate"
      >
        <el-menu-item
          :title="item.meta.title"
          :index="resolveRoutePath(basePath, item.path)"
        >
          <!-- <el-icon v-if="item.meta.icon" class="title-icon">
            <svg-icon :name="item.meta.icon" />
          </el-icon> -->
          <span class="title">{{ item.meta.title }}</span>
        </el-menu-item>
      </a>
    </router-link>
    <el-sub-menu
      v-else
      :title="item.meta.title"
      :index="resolveRoutePath(basePath, item.path)"
    >
      <template #title>
        <!-- <el-icon v-if="item.meta.icon" class="title-icon">
          <svg-icon :name="item.meta.icon" />
        </el-icon> -->
        <span class="title">{{ item.meta.title }}</span>
      </template>
      <template v-for="route in item.children">
        <SidebarItem
          v-if="route.meta.sidebar !== false"
          :key="route.path"
          :item="route"
          :base-path="resolveRoutePath(basePath, item.path)"
        />
      </template>
    </el-sub-menu>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { isExternalLink, resolveRoutePath } from "@/utils";
import SidebarItem from "./item.vue";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  basePath: {
    type: String,
    default: "",
  },
});

const hasChildren = computed(() => {
  let flag = true;
  if (props.item.children) {
    if (props.item.children.every((item) => item.meta.sidebar === false)) {
      flag = false;
    }
  } else {
    flag = false;
  }
  return flag;
});
</script>

<style lang="scss" scoped>
// .sidebar-item {
//   padding: 0 10px;

//   &:first-child {
//     padding-top: 10px;
//   }

//   &:last-child {
//     padding-bottom: 10px;
//   }
// }

a {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}
.el-sub-menu__title {
  > .badge {
    &-dot {
      right: 40px;
    }
    &-text {
      right: 40px;
    }
  }
}

.el-menu--inline {
  background-color: var(--g-sub-sidebar-menu-bg) !important;
  .el-menu-item,
  .el-sub-menu > .el-sub-menu__title {
    color: var(--g-sub-sidebar-menu-color);
    background-color: var(--g-sub-sidebar-menu-bg) !important;
    border-radius: 10px;
    &:hover {
      color: var(--g-sub-sidebar-menu-hover-color) !important;
      background-color: var(--g-sub-sidebar-menu-hover-bg) !important;
    }
  }
}
.el-menu-item,
.el-sub-menu__title {
  color: var(--g-sub-sidebar-menu-color) !important;
  background: transparent !important;
  &:hover {
    color: var(--g-sub-sidebar-menu-hover-color) !important;
    background-color: var(--g-sub-sidebar-menu-hover-bg) !important;
  }
}
.el-menu-item.is-active,
.el-menu--collapse .el-sub-menu.is-active > .el-sub-menu__title,
.el-sub-menu .el-menu--inline .el-menu-item.is-active {
  color: var(--g-sub-sidebar-menu-active-color) !important;
  background-color: var(--g-sub-sidebar-menu-active-bg) !important;
  .icon,
  .el-sub-menu__icon-arrow {
    color: unset;
  }
}
</style>
