import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/tailwind.css";

createRoot(document.getElementById("root")).render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);
