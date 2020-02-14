import React from "react"
import { useDarkMode } from "./hooks/useDarkMode"

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useDarkMode("darkMode", false)
  const toggleMode = e => {
    e.preventDefault()
    setDarkMode(!darkMode)
  }
  return (
      <div className="dark-mode__toggle">
        <button
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
          style={{display: "flex", margin: "2% 0 2% 25%"}}
        >
          Click for Dark Mode
      </button>
      </div>
  )
}

export default DarkModeButton