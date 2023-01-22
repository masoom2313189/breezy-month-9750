import { Payments } from "@mui/icons-material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Address from "../Pages/Address";
import Bag from "../Pages/Bag";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Shipping from "../Pages/Shipping";
import SinglePage from "../Pages/SinglePage";
import Locations from "../Pages/Locations";
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
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/shoping-bag" element={<Bag />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
