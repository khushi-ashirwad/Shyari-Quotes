import React from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Sidebar from './Global/Sidebar';
import Dashboard from './Global/Dashboard';
import Category from './Quote/Quotescategory';
import Quotes from './Quote/Quotes';
import Todayquotes from './Quote/Todayquotes';
import Shayari from './Shayari/Shayari';
import TodayShayari from './Shayari/TodayShayari';
import Shayaricategory from './Shayari/Shayaricategory';
import Image from "./Image/Image"
import Imagecategory from "./Image/Imagecategory"



function App() {
  return (
 <>
 <div style={{display:"flex"}}>
   <Sidebar/>
   <Routes>
   <Route path="/" element={<Dashboard/>} />
   <Route path="/Quotes" element={<Quotes/>} />
   <Route path="/Today Quotes" element={<Todayquotes/>} />
   <Route path="/Category" element={<Category/>} />
   <Route path="/Shayari" element={<Shayari/>} />
   <Route path="/Today Shayari" element={<TodayShayari/>} />
   <Route path="/Shayari Category" element={<Shayaricategory/>} />
   <Route path="/Image" element={<Image/>} />
   <Route path="/Image Category" element={<Imagecategory/>} />
   </Routes>
   </div>
 </>
  );
}

export default App;
