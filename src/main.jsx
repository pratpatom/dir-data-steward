import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import LearningPage from './pages/LearningPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename="/dirdg">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/learn" element={<LearningPage />} />
      </Routes>
    </Router>
  </StrictMode>,
);
