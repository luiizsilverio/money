import React from 'react';
import ReactDOM from 'react-dom/client';

import AppRoutes from './routes';
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppRoutes />
);