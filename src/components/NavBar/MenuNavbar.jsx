import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import { Stack } from "@mui/material";
import { products } from "../../data";
import { Link, useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuNavbar = () => {
  const location = useLocation(); // Get the current location

  const allCategories = [...new Set(products.map((item) => item.category))];
  const [categories, setCategories] = useState(allCategories);
  const allBrands = [...new Set(products.map((item) => item.brand))];
  const [brands, setBrands] = useState(allBrands);

  return (
    <Stack
      direction="row"
      gap={2}
      useFlexGap
      flexWrap="wrap"
      flex="3"
      justifyContent={"center"}
      sx={{
        padding: "10px",
        bgcolor: "#FFEBD8",
        border: 1,
        borderColor: "#C7DCA7;",
      }}
    >
      <Dropdown sx={{ flexGrow: 1, color: "#040D12", fontWeight: "bold" }}>
        <MenuButton component={Link} to={"/"} sx={{ bgcolor: "#C7DCA7" }}>
          Сите продукти
        </MenuButton>
      </Dropdown>
      <Dropdown sx={{ flexGrow: 1, color: "#040D12", fontWeight: "bold" }}>
        <MenuButton sx={{ bgcolor: "#C7DCA7" }}>Бренд</MenuButton>
        <Menu>
          {brands &&
            brands.map((item) => (
              <MenuItem key={item} component={Link} to={`/brand/${item}`}>
                {item}
              </MenuItem>
            ))}
        </Menu>
      </Dropdown>
      <Dropdown sx={{ flexGrow: 1, color: "#040D12", fontWeight: "bold" }}>
        <MenuButton sx={{ bgcolor: "#C7DCA7" }}>Категорија</MenuButton>
        <Menu>
          {categories &&
            categories.map((item) => (
              <MenuItem key={item} component={Link} to={`/category/${item}`}>
                {item}
              </MenuItem>
            ))}
        </Menu>
      </Dropdown>
    </Stack>
  );
};

export default MenuNavbar;
