// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// const rootElement = document.createElement("div");
// rootElement.id = "chrome-extension";
const rootElement = document.getElementById("chrome-extension");

const globalStyles = document.createElement("style");
globalStyles.innerHTML = `
  #chrome-extension {
  position: fixed;
  left: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background: #ffffff;
  border-right: 1px solid #c2c2c2;
  border-radius: 8px;
  z-index: 999;
  }
`;
rootElement.appendChild(globalStyles);
document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
