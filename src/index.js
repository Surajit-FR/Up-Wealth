import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import TestGrid from './pages/TestGrid';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='*' element={<App />} />
      <Route path='/' element={<Index />} />
      <Route path='/test' element={<TestGrid />} />
    </Routes>
  </Router>
);
reportWebVitals();
