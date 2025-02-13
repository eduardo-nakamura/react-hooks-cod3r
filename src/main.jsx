import { createRoot } from 'react-dom/client'; // Correct import for React 18+

import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

import './index.css'
import App from './views/App.jsx'

const root = createRoot(document.getElementById('root')); // Create a root
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);