import React from "react";
import { Toolbar } from "@mui/material";
import Announcement from "./components/NavBar/Announcement";
import Navbar from "./components/NavBar/Navbar";
import Products from "./components/Products/Products";
import Wrapper from "./components/Products/ProductWrapper";
import PriceFilter from "./components/Products/PriceFilter";
import { useState } from "react";
import { products } from "./data";
import MenuNavbar from "./components/NavBar/MenuNavbar";

const Home = () => {
  const [productsList, setProductsList] = useState([...products]);

  const allCategories = [...new Set(products.map((item) => item.category))];
  const [categories, setCategories] = useState(allCategories);
  const allBrands = [...new Set(products.map((item) => item.brand))];
  const [brands, setBrands] = useState(allBrands);

  const filterItemsCategory = (category) => {
    const newItems = products.filter((item) => item.category === category);
    setProductsList(newItems);
  };
  const filterItemsBrands = (brand) => {
    const newItems = products.filter((item) => item.brand === brand);
    setProductsList(newItems);
  };

  console.log(categories);

  return (
    <main style={{ padding: 0, margin: 0 }}>
      <Announcement />
      <Navbar productsList={productsList} setProductsList={setProductsList} />
      <MenuNavbar
        productsList={productsList}
        setProductsList={setProductsList}
        categories={categories}
        filterItemsCategory={filterItemsCategory}
        brands={brands}
        filterItemsBrands={filterItemsBrands}
      />
      <Toolbar />
      <Wrapper productsList={productsList} setProductsList={setProductsList} />
    </main>
  );
};

export default Home;
