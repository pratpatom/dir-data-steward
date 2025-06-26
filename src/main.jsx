import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import LearningPage from './pages/LearningPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename="/dirdg">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="learn" element={<LearningPage />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
);
