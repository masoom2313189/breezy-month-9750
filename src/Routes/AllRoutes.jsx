import { Payments } from "@mui/icons-material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Address from "../Pages/Address";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Shipping from "../Pages/Shipping";
import SinglePage from "../Pages/SinglePage";
import Login from "../Routes/Login";
import SignUp from "../Routes/SignUp";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SinglePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
