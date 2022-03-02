export const getFromLocalStorage = (key) => {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : undefined;
};

export const storeInLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
