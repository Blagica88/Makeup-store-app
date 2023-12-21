import React from "react";
import { Link } from "react-router-dom";

import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@mui/material";
import styled from "styled-components";
import { useGlobalContext } from "../../contex";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
`;

const FormContainer = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #ffebd8;
`;

const SubmitButton = styled(Button)`
  && {
    margin-top: 16px;
    background-color: #c7dca7;
    color: #444d3c;
  }
`;

const User = () => {
  const {
    name,
    lastname,
    address,
    email,
    location,
    handleNameChange,
    handleLastnameChange,
    handleAddressChange,
    handleEmailChange,
    handleLocationChange,
    handleSubmit,
  } = useGlobalContext();
  return (
    <CenteredContainer>
      <FormContainer>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="name" color="success">
            Име
          </InputLabel>
          <Input
            id="name"
            placeholder="Внесете го вашето име"
            value={name}
            onChange={handleNameChange}
          />
          <FormHelperText />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="lastname" color="success">
            Презиме
          </InputLabel>
          <Input
            id="lastname"
            placeholder="Внесете го вашето презиме"
            value={lastname}
            onChange={handleLastnameChange}
          />
          <FormHelperText />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="address" color="success">
            Адреса
          </InputLabel>
          <Input
            id="address"
            placeholder="Внесете ја вашата адреса"
            value={address}
            onChange={handleAddressChange}
          />
          <FormHelperText />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="location" color="success">
            Место на живеење
          </InputLabel>
          <Input
            id="location"
            placeholder="Внесете го вашето место на живеење"
            value={location}
            onChange={handleLocationChange}
          />
          <FormHelperText />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="email" color="success">
            Е-маил
          </InputLabel>
          <Input
            type="email"
            id="email"
            placeholder="Внесете го вашиот е-маил"
            value={email}
            onChange={handleEmailChange}
          />
          <FormHelperText />
        </FormControl>
        <SubmitButton
          variant="contained"
          fullWidth
          component={Link}
          to={"/completed"}
          onClick={handleSubmit}
        >
          Submit
        </SubmitButton>
      </FormContainer>
    </CenteredContainer>
  );
};

export default User;
