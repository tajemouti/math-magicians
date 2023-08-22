import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <nav className="navbar">
        <h1 className="navbar-title">Math Magicians</h1>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  </Router>
);

export default App;
