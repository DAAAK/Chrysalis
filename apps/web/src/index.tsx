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
  Unauthorized,
  NotFound,
} from './pages';
import { AuthProvider } from './components/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/role" element={<Role />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
