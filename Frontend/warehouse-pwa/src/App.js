import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WarehouseList from './components/warehouse/WarehouseList';
import AddWarehouseItem from './components/warehouse/AddWarehouseItem';
import EditWarehouseItem from './components/warehouse/EditWarehouseItem';
import Menu from './components/menu.components';
import ControlBoard from './components/controlboard.components';
import Start from './components/start.components';

export default function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/add" element={<AddWarehouseItem />} />
        <Route path="/edit/:id" element={<EditWarehouseItem />} />
        <Route path="/controlboard" element={<ControlBoard />} />
        <Route path="/warehouse" element={<WarehouseList />} />
      </Routes>
    </Router>
  );
}