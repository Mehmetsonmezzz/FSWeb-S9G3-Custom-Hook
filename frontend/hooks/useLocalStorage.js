import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const readFromLs = () => {
    return JSON.parse(localStorage.getItem(key));
  };

  const [data, setData] = useState(() => {
    return readFromLs() || initialValue;
  });
  const writeToLs = (newValue) => {
    setData(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [data, writeToLs];
};

export default useLocalStorage;
