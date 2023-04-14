import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Tabel from "./Screen/Tabel";
import Login from "./Screen/Login/login";
import Card from './Screen/Card/card';
import SideBar from "./Component/Sidebar";

function App() {
  
  
  
 
  // todo={todo} setEmail={setEmail} email={email}
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/tab"
          element={
            <SideBar ></SideBar>
          }
        ></Route>
        <Route path="/card" element={<Card />}/>
        {/* <Route path="/pags" element={<Tabel />}/> */}
      </Routes>
    </div>
  );
}

export default App;
