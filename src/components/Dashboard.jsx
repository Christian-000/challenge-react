import React from "react";
import { chainChanged } from "../controllers/chainChanged";
import { getUser } from "../controllers/getUser";
import Balance from "./Balance";
import Survey from "./Survey";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

export default function Dashboard() {
  const [user, chainId] = getUser();

  const handleChange = async (e) => {
    e.preventDefault();
    await chainChanged(chainId);
  };

  return (
    <Container maxWidth="md">
      <Typography align="center" variant="h1" color="primary">
        Dashboard
      </Typography>
      <Button variant="outlined" onClick={(e) => handleChange(e)}>
        Change to roften
      </Button>
      <Balance user={user} />
      <Survey />
    </Container>
  );
}
