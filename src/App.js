import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/header';
import Home from './Pages/home';
import About from './Pages/about';
import Track from './Pages/track';
import Login from './Pages/login';
import Cart from './Pages/cart';

const App = () => (
  <Router>
    <div>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/track" element={<Track />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;
