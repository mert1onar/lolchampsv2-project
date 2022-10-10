import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.css"


import { AppLevelProvider } from "./context/AppLevelContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppLevelProvider>
      <App />
    </AppLevelProvider>    
  </React.StrictMode>
);
