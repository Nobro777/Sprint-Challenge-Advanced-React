import { useState } from "react";

export const useLocalStorage = (key, initialValue=false) => {
  const [storedValue, setStoredValue] = useState(() => {
      
      const item = JSON.parse(window.localStorage.getItem(key));
      return item ?  item : initialValue;

  });

  const setValue = value => {
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  
  }

  return [storedValue, setValue]
}
