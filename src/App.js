import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Application from './pages/Application';
import Code from './pages/Code';
import User from './pages/User';
import Server from './pages/Server';
import Project from './pages/Project';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/project" element={<Project />} />
          <Route path="/code" element={<Code />} />
          <Route path="/Application" element={<Application />} />
          <Route path="/user" element={<User />} />
          <Route path="/server" element={<Server />} />
        </Routes>
        </Sidebar>
    </BrowserRouter>
  );
};

export default App;