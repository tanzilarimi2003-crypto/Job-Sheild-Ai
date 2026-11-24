
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import FakeJobDetector from './pages/FakeJobDetector';
import CVBuilder from './pages/CVBuilder';
import MyCV from './pages/MyCV';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/fake-job-detector" element={<FakeJobDetector />} />
      <Route path="/cv-builder" element={<CVBuilder />} />
      <Route path="/my-cv" element={<MyCV />} />
    </Routes>
  );
}

export default App;
