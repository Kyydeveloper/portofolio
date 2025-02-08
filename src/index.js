import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import App from "./App";
import { onCLS, onFCP, onFID, onLCP, onTTFB }  from 'web-vitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
onCLS(console.log);
onFCP(console.log);
onFID(console.log);
onLCP(console.log);
onTTFB(console.log);
