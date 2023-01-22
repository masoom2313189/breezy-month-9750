import React from "react";
import { Routes, Route } from "react-router-dom";
import Bag from "../Pages/Bag";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import SinglePage from "../Pages/SinglePage";
import Login from "../Routes/Login";
import SignUp from "../Routes/SignUp";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SinglePage />} />
        <Route path="/shoping-bag" element={<Bag />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
