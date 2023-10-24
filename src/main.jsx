

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import "../public/css/tailwind.css";
import { ThemeProviders } from "./pages/ThemeContext";


ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <ThemeProviders>
    <BrowserRouter>



        <App />

 
    </BrowserRouter>
    </ThemeProviders>
  </React.StrictMode>
);
