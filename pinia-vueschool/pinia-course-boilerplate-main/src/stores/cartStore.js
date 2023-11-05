import { defineStore } from "pinia";
import { groupBy } from "lodash";

export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      items: [],
    };
  },
  actions: {
    addToCard(count, product) {
      count = parseInt(count);
      for (let index = 0; index < count; index++) {
        this.items.push({ ...product });
      }
    },
    removeFromCard(name) {
      this.items = this.items.filter((i) => i.name !== name);
    },
    setItemCount(item, count) {
      this.removeFromCard(item.name);
      this.addToCard(count, item);
    },
  },
  getters: {
    count: (state) => state.items.length,
    isEmpty: (state) => state.count === 0,
    grouped: (state) => {
      let grouped = groupBy(state.items, (item) => item.name);
      const sorted = Object.keys(grouped).sort();
      let inOrder = {};
      sorted.forEach((k) => (inOrder[k] = grouped[k]));
      return inOrder;
    },
    groupCount: (state) => (name) => state.grouped[name].length,
    total: (state) => state.items.reduce((acc, curr) => acc + curr.price, 0),
  },
});
