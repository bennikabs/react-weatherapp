import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Footer from "./footer";
import axios from "axios";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>
);
