import React from "react";
import styled from "styled-components";
import { Typography, Paper, Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useGlobalContext } from "../../contex";

const ItemContainer = styled(Paper)`
  padding: 10px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
`;

const DrawerItem = ({ item }) => {
  const { cart, removeItemFromCart, decreaseItemFromCart, addItemToCart } =
    useGlobalContext();
  const { name, img, price, id, amount } = item;
  const total = amount * price;

  return (
    <ItemContainer sx={{ bgcolor: "#C7DCA7" }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Image src={img} alt={name} />
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="title1"
            sx={{ fontSize: "20px", fontWeight: "bold" }}
          >
            {name}
          </Typography>
          <Typography variant="body2">Цена: ${price}</Typography>
          <Typography variant="body2">Количина: {amount}</Typography>
        </Grid>
      </Grid>
    </ItemContainer>
  );
};

export default DrawerItem;
