const getLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
};
const setLocalStorage = (key: string, value: string) =>
  localStorage.setItem(key, value);

export { getLocalStorage, setLocalStorage };
