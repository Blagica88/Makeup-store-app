import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import styled from "styled-components";
import MenuButton from "@mui/joy/MenuButton";

import {
  TextField,
  InputAdornment,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { products } from "../../data";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useGlobalContext } from "../../contex";
import { Link } from "react-router-dom";
import OrderItem from "../Order/OrderItem";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import DrawerItem from "../Order/DrawerItem";
import Dropdown from "@mui/joy/Dropdown";

const Search = styled.div`
  background-color: white;
`;

const ButtonContainer = styled.div``;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #040d12;
  height: 40px;
  font-weight: bold;
  font-size: "100px";
`;

const Navbar = ({ productsList, setProductsList }) => {
  const { cart, setCart, getTotals } = useGlobalContext();
  const { totalCost } = getTotals();

  const [searchName, setSearchName] = useState("");

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    console.log(isDrawerOpen);
  }, [isDrawerOpen]);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen((prev) => !prev);
        }}
        sx={{ maxWidth: "450px", width: "100%" }}
        PaperProps={{ sx: { maxWidth: "320px", width: "100%" } }}
      >
        <Stack direction="column" gap={1} sx={{ p: 2 }}>
          <Typography variant="h5" fontWeight={"bold"}>
            КОШНИЧКА
          </Typography>
          {cart.map((item, index) => (
            <DrawerItem key={index} item={item} />
          ))}
          <Typography fontWeight={"bold"}>
            Вкупно: ${totalCost?.toFixed(2)}{" "}
          </Typography>
          <Button
            component={Link}
            to={"/order"}
            sx={{ bgcolor: "#FFEBD8", color: "#000000" }}
            onClick={() => setIsDrawerOpen(false)}
          >
            Оди кон кошничка
          </Button>
        </Stack>
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            sx={{
              bgcolor: "#FFEBD8",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderLeft: 1,
              borderRight: 1,
              borderColor: "#C7DCA7;",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="#040D12"
              fontWeight="bold"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              BeautyB.
            </IconButton>

            <Search>
              <TextField
                id="outlined-basic"
                variant="outlined"
                onChange={(e) => setSearchName(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton component={Link} to={`/search/${searchName}`}>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ width: 600 }}
              />
            </Search>

            <Stack
              direction="row"
              justifyContent={"flex-end"}
              alignItems="center"
              gap={1}
            >
              <UserMenu />
              <Button onClick={handleDrawerOpen}>
                <Badge badgeContent={cart.length} color="success">
                  <ShoppingCartIcon
                    sx={{ width: 40, height: 40, color: "#040D12" }}
                  />
                </Badge>
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://img.texasmonthly.com/2021/06/selena-gomez-acting.jpg?auto=compress&crop=faces&fit=fit&fm=jpg&h=0&ixlib=php-3.3.1&q=45&w=1250"
          sx={{ width: 50, height: 50 }}
        />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem component={Link} to="/showorders" onClick={handleClose}>
          Мои нарачки
        </MenuItem>
        <MenuItem onClick={handleClose}>Одјави се</MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
