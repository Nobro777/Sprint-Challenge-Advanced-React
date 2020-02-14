import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode")

  useEffect(() => {
    if (darkMode) {
      document.querySelector(".App").classList.add("dark-mode")
    } else {
      document.querySelector(".App").classList.remove("dark-mode")
    }
  }, [darkMode])

  return [darkMode, setDarkMode]
}
