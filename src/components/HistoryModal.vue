<template>
  <div class="history-modal" v-if="show" @click.self="closeModal">
    <div class="modal-card glow-container">
      <div class="modal-header">
        <h2>过往模拟记录</h2>
        <button class="clear-btn" @click="clearHistory">
          <svg viewBox="0 0 172.541 172.541" class="clear-icon">
            <g>
              <path
                d="M166.797,25.078h-13.672h-29.971V0H49.388v25.078H19.417H5.744v15h14.806l10,132.463h111.443l10-132.463h14.805V25.078z M64.388,15h43.766v10.078H64.388V15z M128.083,157.541H44.46L35.592,40.078h13.796h73.766h13.796L128.083,157.541z"
              />
              <rect x="80.271" y="65.693" width="12" height="66.232" />
              <rect x="57.271" y="65.693" width="12" height="66.232" />
              <rect x="103.271" y="65.693" width="12" height="66.232" />
            </g>
          </svg>
        </button>
      </div>
      <div class="history-list">
        <div
          v-for="(item, index) in store.history"
          :key="index"
          class="history-item"
        >
          {{ index + 1 }}. {{ item }}
        </div>
        <div v-if="store.history.length === 0" class="empty-tip">
          暂无模拟记录
        </div>
      </div>
      <button class="close-btn" @click="closeModal">关闭</button>
    </div>
  </div>
</template>

<script setup>
import { useLifeStore } from "../pinia/store.js";
const store = useLifeStore();

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["close"]);

const closeModal = () => emit("close");
const clearHistory = () => store.clearHistory();
</script>

<style scoped>
.history-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-card {
  width: 90%;
  max-width: 520px;
  max-height: 80vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h2 {
  font-size: 1.6rem;
  text-shadow: var(--text-glow);
}

.history-list {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.history-item {
  font-size: 1.2rem;
  padding: 0.6rem 1rem;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-shadow: var(--text-glow);
}

.empty-tip {
  text-align: center;
  font-size: 1.1rem;
  opacity: 0.6;
  padding: 2rem 0;
}

.clear-btn {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  background: rgba(110, 180, 255, 0.2);
  border: 1px solid rgba(140, 200, 255, 0.4);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.clear-icon {
  width: 20px;
  height: 20px;
  fill: var(--text-main);
  filter: drop-shadow(var(--text-glow));
}

.clear-btn:hover {
  background: rgba(110, 180, 255, 0.35);
  box-shadow: 0 0 12px var(--glow-color);
}

.close-btn {
  padding: 0.6rem 1.2rem;
  font-family: 楷体, sans-serif;
  font-size: 1rem;
  background: rgba(110, 180, 255, 0.2);
  color: var(--text-main);
  border: 1px solid rgba(140, 200, 255, 0.4);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: var(--text-glow);
}

.close-btn:hover {
  background: rgba(110, 180, 255, 0.35);
  box-shadow: 0 0 12px var(--glow-color);
}
</style>
