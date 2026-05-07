import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppProvider } from './context/AppContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <HashRouter future={{ v7_startTransition: true }}>
        <AppProvider>
          <App />
        </AppProvider>
      </HashRouter>
    </HelmetProvider>
  </React.StrictMode>
);
