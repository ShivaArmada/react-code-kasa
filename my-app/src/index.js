import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import Home from "./routes/Home";
import Fiche from "./routes/Fiche";
import NotFound from "./routes/NotFound";
import About from "./routes/About";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche/:id" element={<Fiche />} />
        <Route path="/about" element={<About />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
