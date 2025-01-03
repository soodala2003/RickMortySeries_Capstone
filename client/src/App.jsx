import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/api/login" element={<LoginPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
