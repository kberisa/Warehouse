import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WarehouseList from './components/warehouse/WarehouseList';
import WarehouseItem from './components/warehouse/WarehouseItem';
import AddWarehouseItem from './components/warehouse/AddWarehouseItem';
import EditWarehouseItem from './components/warehouse/EditWarehouseItem';
import Menu from './components/menu.components';
import ControlBoard from './components/controlboard.components';
import Start from './components/start.components';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" Component={<Start />} />
        <Route path="/add" Component={<AddWarehouseItem />} />
        <Route path="/edit/:id" Component={<EditWarehouseItem />} />
        <Route path="/controlboard" Component={<ControlBoard />} />
        <Route path="/warehouse" Component={<WarehouseList />} />
        <Route path="/item" Component={<WarehouseItem />} />
      </Routes>
    </Router>
  );
}