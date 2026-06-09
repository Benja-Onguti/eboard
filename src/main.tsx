import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppProvider } from './context/AppContext';
import App from './App';
import { analyticsService } from './services/analyticsService';
import './index.css';

// Initialize analytics if measurement ID is available
const measurementId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
if (measurementId) {
  analyticsService.init(measurementId);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename="/eboard">
        <AppProvider>
          <App />
        </AppProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
