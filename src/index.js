import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import 'materialize-css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


ReactDOM.render(
  <React.StrictMode>
    {/* Routes for all the pages within the application */}
    <Router basename="/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
