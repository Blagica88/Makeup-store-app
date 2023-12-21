import { Toolbar } from "@mui/material";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import ProductCard from "./components/Products/ProductCard";
import Announcement from "./components/NavBar/Announcement";
import Navbar from "./components/NavBar/Navbar";
import Products from "./components/Products/Products";
import ProductWrapper from "./components/Products/ProductWrapper";
import PriceFilter from "./components/Products/PriceFilter";
import { useEffect, useState } from "react";
import { products } from "./data";
import MenuNavbar from "./components/NavBar/MenuNavbar";
import { useGlobalContext } from "./contex";
import Order from "./components/Order/Order";
import User from "./components/Order/User";
import OrderCompleted from "./components/Order/OrderCompleted";
import ShowOrders from "./components/ShowOrders/ShowOrders";
import ShowOrder from "./components/ShowOrders/ShowOrder";

const App = () => {
  return (
    <main style={{ padding: 0, margin: 0 }}>
      <Announcement />
      <Navbar />
      <MenuNavbar />
      <Toolbar />
      <Routes>
        <Route path="/" element={<ProductWrapper />} />
        <Route path="/productcard/:id" element={<ProductCard />} />
        <Route path="/category/:categoryName" element={<ProductWrapper />} />
        <Route path="/brand/:brandName" element={<ProductWrapper />} />
        <Route path="/search/:searchName" element={<ProductWrapper />} />
        <Route path="/order" element={<Order />} />
        <Route path="/user" element={<User />} />
        <Route path="/completed" element={<OrderCompleted />} />
        <Route path="/showorders" element={<ShowOrders />} />
        <Route path="/showorders/:id" element={<ShowOrder />} />
      </Routes>
    </main>
  );
};

export default App;
