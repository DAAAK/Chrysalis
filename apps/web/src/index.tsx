import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Contacts, Features, Connection, Verify } from './pages';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/features" element={<Features />} />
        <Route path="/connect" element={<Connection />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
