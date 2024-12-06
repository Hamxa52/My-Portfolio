import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional global CSS
import App from './App';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS styles
import { BrowserRouter } from "react-router-dom";

// Create a GlobalEffect component to handle AOS initialization
const GlobalEffect = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration (1 second)
      once: true, // Animation happens only once
      offset: 100, // Trigger animation when 100px before entering the viewport
    });
  }, []); // Empty dependency array ensures it runs only once

  return null; // This component does not render anything
};

// Render the app along with GlobalEffect component
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalEffect />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
