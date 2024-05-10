import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Home from './routes/Home';
import Fiche from './routes/Fiche';
import NotFound from './routes/NotFound';
import About from './routes/About';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche/:id" element={<Fiche />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
