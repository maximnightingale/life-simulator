<template>
  <div class="app-wrapper">
    <div class="card glow-container">
      <div class="loading-mask" v-if="loading"></div>
      <div class="loading-spinner" v-if="loading"></div>
      <button class="history-btn" @click="showHistory = true">
        <svg viewBox="0 0 128 128" class="history-icon">
          <path
            d="m68 28v29.11c1.2.698 2.192 1.69 2.89 2.89h21.11c2.209 0 4 1.791 4 4s-1.791 4-4 4h-21.11c-1.386 2.381-3.937 4-6.89 4-4.418 0-8-3.582-8-8 0-2.954 1.619-5.505 4-6.89v-29.11c0-2.209 1.791-4 4-4s4 1.791 4 4zm-4-28c-20.829 0-40.059 10.039-52 26.681v-14.681c0-2.209-1.791-4-4-4s-4 1.791-4 4v24c0 2.209 1.791 4 4 4h24c2.209 0 4-1.791 4-4s-1.791-4-4-4h-13.938c10.414-14.945 27.448-24 45.938-24 30.879 0 56 25.121 56 56s-25.121 56-56 56-56-25.121-56-56c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 35.289 28.711 64 64 64s64-28.711 64-64-28.711-64-64-64z"
          />
        </svg>
      </button>
      <h1 class="title">人生模拟</h1>
      <Generator />
      <ResultView />
    </div>
    <HistoryModal :show="showHistory" @close="showHistory = false" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Generator from "./components/Generator.vue";
import ResultView from "./components/ResultView.vue";
import HistoryModal from "./components/HistoryModal.vue";

const showHistory = ref(false);
const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 600);
});
</script>

<style scoped>
.app-wrapper {
  width: 100%;
  max-width: 580px;
  position: relative;
}

.card {
  position: relative;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.history-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  background: rgba(110, 180, 255, 0.15);
  border: 1px solid rgba(140, 200, 255, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.history-icon {
  width: 22px;
  height: 22px;
  fill: var(--text-main);
  filter: drop-shadow(var(--text-glow));
  transition: all 0.3s ease;
}

.history-btn:hover {
  background: rgba(110, 180, 255, 0.3);
  box-shadow: 0 0 12px var(--glow-color);
}

.history-btn:hover .history-icon {
  transform: rotate(15deg);
}

.title {
  font-size: 2.2rem;
  text-shadow: var(--text-glow);
  letter-spacing: 4px;
}
</style>
