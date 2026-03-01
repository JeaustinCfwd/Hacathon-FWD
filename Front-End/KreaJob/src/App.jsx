import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Login";
import ForgotPasswordPage from './pages/ForgotPasswordPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
    </Routes>
  )
}

export default App;