import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import CallbackPage from './pages/Callback';

import PrivateGuard from './guards/PrivateGuard';
import DashboardFeature from './features/DashboardFeature';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/dashboard" element={<PrivateGuard />}>
          <Route index element={<DashboardFeature />} />
        </Route>

        <Route path="/cb/:jwt" element={<CallbackPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
