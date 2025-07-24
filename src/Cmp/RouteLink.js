import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

const RouteLink = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<Login />}  />
             <Route path="/dashboard" element={<Dashboard />}  />
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default RouteLink;
