export const getFromLocalStorage = (key) => {
  const stored = localStorage.getItem(key);
  return !stored ? undefined : JSON.parse(stored);
};

export const storeInLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
