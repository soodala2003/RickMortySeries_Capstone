import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Season1 from './pages/Season1';
import Episode from './pages/Episode';
import Reviews from './pages/Reviews';

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/api/login" element={<LoginPage />} />
          <Route exact path="/api/season1" element={<Season1 />} />
          <Route exact path="/api/season1/:id" element={<Episode />} />
          <Route exact path="/api/season1/episode1/reviews" element={<Reviews />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
