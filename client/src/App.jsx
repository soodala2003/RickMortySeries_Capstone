import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Season1 from './pages/seasons/Season1';
import Season2 from './pages/seasons/Season2';
import S1Episode from './pages/episodes/S1Episode';
import S2Episode from './pages/episodes/S2Episode';
import Reviews from './pages/reviews/Reviews';
import ReviewCreate from './pages/reviews/ReviewCreate';

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
          <Route exact path="/api/season2" element={<Season2 />} />
          <Route exact path="/api/season1/:id" element={<S1Episode />} />
          <Route exact path="/api/season2/:id" element={<S2Episode />} />
          <Route exact path="/api/reviews" element={<Reviews />} />
          <Route exact path="/api/reviews/add" element={<ReviewCreate />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
