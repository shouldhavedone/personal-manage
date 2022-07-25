<template>
  <el-drawer v-model="drawer" size="300px" :with-header="false">
    <template #header>
      <div class=""></div>
      <!-- <h4 :id="titleId" :class="titleClass">This is a custom header!</h4> -->
    </template>
  </el-drawer>
</template>

<script setup>
import { ref, watch } from "vue";

const drawer = ref(false);
</script>

<style lang="scss" scoped></style>
