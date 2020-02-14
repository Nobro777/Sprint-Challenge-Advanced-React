import React from "react"
import ReactDOM from "react-dom"
import { getByText, render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import App from "./App"

test("does the app render?(test)", () => {
  const { getByText } = render(<App />)
})

test("does dark mode button render?(test)", () => {
  const { getByText } = render(<App />)
  const darkModeButton = getByText("Click for Dark Mode")
  expect(darkModeButton).toBeInTheDocument();
})

//Ask gary why this is 'tobetruthy' instead of 'tobefalsy'
test("is useDarkMode defined?", () => {
  const darkMode = <useDarkMode />
  expect(darkMode).toBeDefined();
  expect(darkMode).not.toBeUndefined();
  expect(darkMode).toBeTruthy();
})

test("is useLocalStorage defined?", () => {
  const LocalStorage = <useLocalStorage />
  expect(LocalStorage).toBeDefined();
  expect(LocalStorage).not.toBeUndefined();
  expect(LocalStorage).toBeTruthy();
})

test("does title render?", () => {
  const { getByText } = render(<App />)
  const titleRender = getByText("Womens World Cup Internet Stats")
  expect(titleRender).toBeDefined();
})

