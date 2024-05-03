import React from 'react';
import ReactDOM from 'react-dom/client';

import AppRoutes from './routes';
import "./styles/global.css";
import { ContextoProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextoProvider>
    <AppRoutes />
  </ContextoProvider>
);