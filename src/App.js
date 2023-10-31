import React from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Sidebar from './Component/Sidebar';
import Dashboard from './Pages/Dashboard';
function App() {
  return (
 <>
 <div style={{display:"flex"}}>
   <Sidebar/>
   <Routes>
   <Route path="/" element={<Dashboard/>} />
   </Routes>
   </div>
 </>
  );
}

export default App;
