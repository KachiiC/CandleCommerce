import { Item } from "../interfaces/item";

export const UniqueValues = (array: Item[]) => {
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

export const CountDuplicates = (value: string, arr: { title: string }[]) => {
  return arr.filter((obj) => obj.title === value).length;
};
