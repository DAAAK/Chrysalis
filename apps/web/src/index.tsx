import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import {
  Home,
  Contacts,
  Features,
  Verify,
  Booking,
  Login,
  Role,
} from './pages';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/role" element={<Role />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
