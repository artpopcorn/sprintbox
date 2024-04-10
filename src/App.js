import logo from './logo.svg';
import './App.css';










import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'; // Путь к HomePage
import AdminPage from './AdminPage'; // Путь к AdminPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;