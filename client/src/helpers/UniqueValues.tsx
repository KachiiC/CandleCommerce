import { Item } from '../interfaces/item';

const UniqueValues = (array: Item[]) => {
  const result = [];
  const map = new Map();
  for (const item of array) {
    if (!map.has(item.id)) {
      map.set(item.id, true);
      result.push(item);
    }
  }

  return result;
};

export default UniqueValues;
