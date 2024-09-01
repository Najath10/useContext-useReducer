import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CounterProvider } from "./context/CounterContext.jsx";
import { UseReduceUseContext } from "./components/UseReduceUseContext.jsx";
import {  CounterProvider1 } from "./components/CounterContext1.jsx";

createRoot(document.getElementById("root")).render(
  <CounterProvider>
    <CounterProvider1>
      <App />
    </CounterProvider1>
  </CounterProvider>
);
