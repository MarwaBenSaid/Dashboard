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
import AddProject from './pages/AddProject';
import Add from './pages/Add';
import Profile from './pages/Profile';
import RegisterPart1 from './components/RegisterPart1';
import Register from './components/Register';
import Login from './components/Login';
import Environment from './pages/Environment';


const App = () => {
  return (
    <div className='App'>
    <BrowserRouter>
   <Navbar/>
   <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/project" element={<Project />} />
          <Route path="/code" element={<Code />} />
          <Route path="/Application" element={<Application />} />
          <Route path="/user" element={<Profile />} />
          <Route path="/server" element={<Server />} />
          <Route path="/addproject" element={<AddProject />} />
          <Route path="/add" element={<Add />} />
          <Route path="/sign1" element={<RegisterPart1/>} />
          <Route path="/sign2" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/project/application" element={<Application/>} />
          <Route path="/project/application/environment" element={<Environment/>} />
          


        </Routes>
       </Sidebar>
    </BrowserRouter>
    </div>
  );
};

export default App;