// src/index.js
import React from 'react';
import ReactDOM from "react-dom/client"; // Import ReactDOM from react-dom/client
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

// Create a root to render the app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component wrapped in Provider to provide Redux store
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
