import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateResumePage from './pages/CreateResumePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-resume" element={<CreateResumePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
