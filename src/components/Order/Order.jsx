import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../contex";
import OrderItem from "./OrderItem";
import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #040d12;
  height: 40px;
  font-weight: bold;
  font-size: "100px";
`;

const Order = () => {
  const { cart, getTotals } = useGlobalContext();

  console.log(cart);
  const { totalAmount, totalCost } = getTotals();

  return (
    <main>
      <Container> МОЈА КОШНИЧКА</Container>

      <Stack
        direction="column"
        gap={2}
        useFlexGap
        flexWrap="wrap"
        flex="3"
        justifyContent={"space-around"}
      >
        {cart.map((item) => (
          <OrderItem item={item} />
        ))}
      </Stack>
      <Container> Вкупно: ${totalCost?.toFixed(2)} </Container>
      <Container>
        <Button
          component={Link}
          to={"/user"}
          sx={{ bgcolor: "#FFEBD8", color: "#000000", width: "200px" }}
        >
          НАРАЧАЈ
        </Button>
      </Container>
    </main>
  );
};

export default Order;
