import "./index.scss";

import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App.jsx";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <ScrollToTop />
    <App />
  </HashRouter>,
);
