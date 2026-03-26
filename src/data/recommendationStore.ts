import { itemsData } from './items';

type RecommendedItem = typeof itemsData[0];
type Listener = (items: RecommendedItem[]) => void;

let history: RecommendedItem[] = [itemsData.find(i => i.id === 'protein-bowl') || itemsData[0]];
const listeners: Set<Listener> = new Set();

export const recommendationStore = {
  getRecommendedItems: () => history,
  addRecommendedItem: (item: RecommendedItem) => {
    // Keep unique items, move new click to front
    history = [item, ...history.filter(i => i.id !== item.id)];
    listeners.forEach(listener => listener(history));
  },
  subscribe: (listener: Listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }
};
