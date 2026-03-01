import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Everywhere/NavBar';
import Footer from './components/Everywhere/Footer';
import Login from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import CandidateDashboard from './pages/CandidateDashboard';
import InstitutionDashboard from './pages/InstitutionDashboard';

const Home = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <h1>Bienvenido a KreaJob</h1>
          <p>Bolsa de Empleo</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/dashboard" element={<CandidateDashboard />} />
      <Route path="/institution" element={<InstitutionDashboard />} />
    </Routes>
  )
}

export default App;
