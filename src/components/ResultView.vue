<template>
  <div class="result-box">
    <p class="result-text" :class="{ show: store.result }">
      {{ store.result || "点击按钮模拟人生" }}
    </p>
  </div>
</template>

<script setup>
import { useLifeStore } from "../pinia/store.js";
const store = useLifeStore();
</script>

<style scoped>
.result-box {
  width: 100%;
  min-height: 80px;
  display: grid;
  place-items: center;
}
</style>
