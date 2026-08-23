import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import './index.css';

// Apply theme class on load based on localStorage or default to dark
const savedTheme = localStorage.getItem('sba-theme') || 'dark';
document.documentElement.classList.toggle('dark', savedTheme === 'dark');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
