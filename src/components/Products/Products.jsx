import React, { useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 10px;
`;

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const Products = ({ productsList }) => {
  const [page, setPage] = useState(1);
  const productsPerPage = 4;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = productsList.slice(startIndex, endIndex);

  return (
    <Page>
      <Container>
        <Stack
          direction="row"
          gap={2}
          useFlexGap
          flexWrap="wrap"
          flex="3"
          justifyContent={"space-around"}
          sx={{ mx: "auto" }}
        >
          {displayedProducts.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </Stack>
      </Container>
      <Pagination
        count={Math.ceil(productsList.length / productsPerPage)}
        page={page}
        onChange={handleChangePage}
        size="large"
        sx={{ marginTop: "10px" }}
      />
    </Page>
  );
};

export default Products;
