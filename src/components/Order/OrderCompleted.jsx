import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ShowOrders from "../ShowOrders/ShowOrders";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  background-color: #ffebd8;
`;

const StyledCard = styled(Card)`
  width: 90%;
  max-width: 600px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: #c7dca7;
`;

const StyledCardContent = styled(CardContent)`
  text-align: center;
`;

const StyledCardActions = styled(CardActions)`
  justify-content: center;
  margin-top: 16px;
`;

const ContinueShoppingButton = styled(Button)`
  background-color: #4caf50;
  color: #fff;
  &:hover {
    background-color: #357a38;
  }
`;

const OrderCompleted = () => {
  return (
    <Container>
      <StyledCard>
        <StyledCardContent>
          <Typography variant="h5" component="div">
            Успешно ја примивме вашата нарачка!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ви благодариме на довербата!
          </Typography>
        </StyledCardContent>
        <StyledCardActions>
          <ContinueShoppingButton
            size="small"
            color="primary"
            component={Link}
            to={"/"}
          >
            Продолжи со купување
          </ContinueShoppingButton>
        </StyledCardActions>
      </StyledCard>
    </Container>
  );
};

export default OrderCompleted;
