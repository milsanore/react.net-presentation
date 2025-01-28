import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from "./App"

// Render the React component to the DOM
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
