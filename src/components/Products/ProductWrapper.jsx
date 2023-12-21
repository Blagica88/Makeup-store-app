import React, { useEffect, useState } from "react";
import Products from "./Products";
import PriceFilter from "./PriceFilter";
import { Stack } from "@mui/material";
import styled from "styled-components";
import { useGlobalContext } from "../../contex";
import { useParams } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ProductWrapper = () => {
  const { productsList } = useGlobalContext();
  const [products, setProducts] = useState([]);

  const { categoryName, brandName, searchName } = useParams();

  console.log(categoryName);

  useEffect(() => {
    let newList = [...productsList];
    if (categoryName) {
      newList = productsList.filter((item) => item.category === categoryName);
    } else if (brandName) {
      newList = productsList.filter((item) => item.brand === brandName);
    } else if (searchName) {
      newList = productsList.filter((item) =>
        item.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }
    setProducts(newList);
  }, [categoryName, brandName, searchName]);

  return (
    <Container>
      <PriceFilter productsList={products} setProductsList={setProducts} />
      <Products productsList={products} />
    </Container>
  );
};

export default ProductWrapper;
