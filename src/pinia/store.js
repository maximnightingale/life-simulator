import { defineStore } from "pinia";
import lifeData from "../data/lifeData.js";

export const useLifeStore = defineStore("life", {
  state: () => ({
    result: null,
    history: [],
  }),
  actions: {
    randomLife() {
      const randomScore = Math.floor(Math.random() * 132001);
      const item = lifeData.find((d) => {
        const [min, max] = d.range.split("-").map(Number);
        return randomScore >= min && randomScore <= max;
      });
      const current = item?.desc || "???";
      this.result = current;
      this.history.unshift(current);
    },
    clearHistory() {
      this.history = [];
    },
  },
});
