import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../contex";
import { IconButton } from "@mui/material";

const Container = styled.div`
  min-width: 280px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Product = (props) => {
  const { addItemToCart } = useGlobalContext();

  return (
    // <Container>
    <Card
      sx={{ maxWidth: 345, boxShadow: 5, padding: "8px", bgcolor: "#C7DCA7" }}
    >
      <CardMedia
        component="img"
        height="400px"
        margin="5px"
        image={props.item.img}
      />
      <CardContent
        sx={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "150px",
          flexDirection: "column",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {props.item.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.item.price}$
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.item.desc}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          component={Link}
          to={`/productcard/${props.item.id}`}
          sx={{ bgcolor: "#607c3c", color: "white" }}
        >
          Повеќе информации
        </Button>

        <IconButton onClick={(e) => addItemToCart(props.item)}>
          <ShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
    // </Container>
  );
};

export default Product;
