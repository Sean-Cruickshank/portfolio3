import React from "react";
import { createRoot } from "react-dom/client"
import './styles/style.css'
import './styles/home.css'
import './styles/about.css'
import './styles/portfolio.css'
//import 'bootstrap/dist/css/bootstrap.min.css'
import App from "./App";

createRoot(document.getElementById("root")).render(<App />)