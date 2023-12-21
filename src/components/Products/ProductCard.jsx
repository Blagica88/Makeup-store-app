import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardMedia from "@mui/material/CardMedia";
import { useParams } from "react-router-dom";
import { products } from "../../data"; // Assuming the path to your data file
import { TextField, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import { useGlobalContext } from "../../contex";
import { ToastContainer, toast } from "react-toastify";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  border: 1px solid black;
`;

const ImageContainer = styled.div`
  width: 560px;
  height: 100%;
`;

const InfoContainer = styled.div`
  padding: 0 60px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #c7dca7;
  color: #444d3c;
  font-family: "Lucida Console", "Courier New", monospace;
`;
const Info = styled.div`
  color: #444d3c;
  font-family: "Lucida Console", "Courier New", monospace;
`;
const Title = styled.h2``;
const Description = styled.h2``;
const Price = styled.h2`
  color: red;
`;
const Brand = styled.h3``;
const Category = styled.h3``;

const ButtonsCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const ProductCard = ({ props }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const { addItemToCart, decreaseItemFromCart, cart } = useGlobalContext();
  const [selectedQuantity, setSelectedQuantity] = useState(item?.amount || 0);

  useEffect(() => {
    let item = cart?.find((i) => i?.id === +id);
    if (!item) {
      item = products?.find((i) => i?.id === +id);
    }
    setItem(item || null);
  }, [products, cart]);

  const handleIncreaseQuantity = () => {
    setSelectedQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (selectedQuantity > 0) {
      setSelectedQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const handleBuyClick = () => {
    const updatedItem = { ...item, amount: selectedQuantity };
    console.log(updatedItem);
    addItemToCart(updatedItem);
    showToastMessage();

    console.log(cart);
  };

  // Find the product with the matching id

  if (!item) {
    // Handle the case where the product with the given id is not found
    return <div>Product not found</div>;
  }

  return (
    <Container>
      <ImageContainer>
        <CardMedia
          component="img"
          width="100%"
          height="100%"
          image={item.img}
          alt={item.name}
        />
      </ImageContainer>
      <InfoContainer>
        <Info>
          <Title>{item.name}</Title>
        </Info>
        <Info>
          <Price>{item.price}$</Price>
        </Info>
        <Info>
          <Description>{item.desc}</Description>
        </Info>
        <Info>
          <Category>Категорија: {item.category}</Category>
        </Info>
        <Info>
          <Brand>Бренд: {item.brand}</Brand>
        </Info>

        <ButtonsCard>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ marginRight: "16px" }}
          >
            Количина
          </Typography>
          <TextField
            type="number"
            value={selectedQuantity}
            inputProps={{ min: 0, max: 99 }}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleIncreaseQuantity} size="small">
                    <AddIcon />
                  </IconButton>
                  <IconButton onClick={handleDecreaseQuantity} size="small">
                    <RemoveIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            component="label"
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            style={{
              marginLeft: "16px",
              backgroundColor: "#FFEBD8",
              color: "#000000",
            }}
            onClick={handleBuyClick}
          >
            Купи
          </Button>
        </ButtonsCard>
      </InfoContainer>
    </Container>
  );
};

export default ProductCard;
