import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { products } from "../../data";

const PriceFilter = ({ productsList, setProductsList }) => {
  const [value, setValue] = useState(20);

  const changeValue = (event, value) => {
    setValue(value);
  };

  const filterItems = () => {
    const newItems = products.filter((item) => {
      console.log(item, value);
      return item.price < value;
    });
    console.log(value);
    console.log(newItems);
    setProductsList(newItems);
  };

  return (
    <Box
      display="flex"
      sx={{ maxWidth: "300px", width: "100%", paddingRight: "30px" }}
      flexDirection="column"
    >
      <Typography
        id="input-slider"
        gutterBottom
        sx={{ fontSize: "20px", fontWeight: "bold" }}
      >
        Филтер:
      </Typography>
      <Slider sx={{ color: "#C7DCA7" }} value={value} onChange={changeValue} />
      <Button
        sx={{
          bgcolor: "#C7DCA7",
          color: "#000000",
          "&:hover": { bgcolor: "#CDCCC7" },
        }}
        onClick={filterItems}
      >
        Apply
      </Button>
    </Box>
  );
};

export default PriceFilter;
