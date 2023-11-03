import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WarehouseList from './components/warehouse/WarehouseList';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/warehouse" Component={<WarehouseList />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}