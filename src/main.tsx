import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource/ibm-plex-sans/300.css'; // Light
import '@fontsource/ibm-plex-sans/400.css'; // Regular
import '@fontsource/ibm-plex-sans/500.css'; // Medium
import '@fontsource/ibm-plex-sans/600.css'; // Semi-Bold
import '@fontsource/ibm-plex-sans/700.css'; // Bold

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
