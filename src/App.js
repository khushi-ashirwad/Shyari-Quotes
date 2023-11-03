import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./component/Global/Sidebar";
import Dashboard from "./component/Global/Dashboard";
import Category from "./component/Quote/Quotescategory";
import Quotes from "./component/Quote/Quotes";
import Todayquotes from "./component/Quote/Todayquotes";
import Shayari from "./component/Shayari/Shayari";
import TodayShayari from "./component/Shayari/TodayShayari";
import Shayaricategory from "./component/Shayari/Shayaricategory";
import Image from "./component/Imagecategory/Image";
import Imagecategory from "./component/Imagecategory/Imagecategory";
import Basicprovider from "./context/BasicProvider";

function App() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Basicprovider>
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Quotes" element={<Quotes />} />
            <Route path="/Today Quotes" element={<Todayquotes />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/Shayari" element={<Shayari />} />
            <Route path="/Today Shayari" element={<TodayShayari />} />
            <Route path="/Shayari Category" element={<Shayaricategory />} />
            <Route path="/Image" element={<Image />} />
            <Route path="/Image Category" element={<Imagecategory />} />
          </Routes>
        </Basicprovider>
      </div>
    </>
  );
}

export default App;
