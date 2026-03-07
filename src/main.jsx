import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";


import App from "./App.jsx";
import "./index.css";


// Get root container
const container = document.getElementById("root");

// Safety check
if (!container) {
  throw new Error("Root element (#root) not found in index.html");
}

// Create React root
const root = ReactDOM.createRoot(container);

// Render React App
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);