import React from "react";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../../contex";

const StyledBox = styled(Box)`
  margin: 20px;
  background-color: #c7dca7;
  width: 1500px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
`;

const StyledTableContainer = styled(TableContainer)`
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  background-color: #c7dca7;
`;

const StyledTableCell = styled(TableCell)`
  && {
    font-weight: bold;
    font-size: 15px;
    color: black;
  }
`;

const StyledButtonCell = styled(TableCell)`
  && {
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledButton = styled(Button)`
  && {
    color: black;
    background-color: #ffebd8;
    &:hover {
      background-color: #ffebd8;
    }
  }
`;

const ShowOrders = () => {
  const { orders } = useGlobalContext();

  return (
    <StyledBox>
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          padding: "10px",
        }}
      >
        Нарачки
      </Typography>
      <StyledTableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Нарачка</StyledTableCell>
              <StyledTableCell>Датум</StyledTableCell>
              <StyledTableCell>Статус</StyledTableCell>
              <StyledTableCell
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                Детали
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <StyledTableCell>{order.id}</StyledTableCell>
                <StyledTableCell>{order.orderDate}</StyledTableCell>
                <StyledTableCell>{order.status}</StyledTableCell>
                <StyledButtonCell>
                  <StyledButton
                    component={Link}
                    to={`/showorders/${order.id}`}
                    color="primary"
                  >
                    ПОГЛЕДНИ
                  </StyledButton>
                </StyledButtonCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </StyledBox>
  );
};

export default ShowOrders;
