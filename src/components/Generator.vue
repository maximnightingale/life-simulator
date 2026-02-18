<template>
  <button class="btn-modern" @click="handleGenerate">重新生成</button>
</template>

<script setup>
import { useLifeStore } from "../pinia/store.js";

const store = useLifeStore();

const handleGenerate = () => {
  store.randomLife();
};
</script>
