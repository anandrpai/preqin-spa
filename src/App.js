import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InvestorsList from './components/InvestorsList';
import InvestorDetail from './components/InvestorDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InvestorsList />} />
        <Route path="/investors/:id" element={<InvestorDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
