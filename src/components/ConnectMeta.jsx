import React from "react";
import { useNavigate } from "react-router-dom";
import { connectWallet } from "../controllers/connectWallet";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Connect() {
  let navigate = useNavigate();

  const handleAccount = async (e) => {
    e.preventDefault();
    await connectWallet();
    navigate("dashboard");
  };

  return (
    <Container>
      <Stack spacing={10} direction="column">
        <Typography marginTop={10} variant="h1" color="primary" align="center">
          Connect with your Metamask account...
        </Typography>
        <Button variant="contained" onClick={(e) => handleAccount(e)}>
          Connect
        </Button>
      </Stack>
    </Container>
  );
}
