import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function TriviaCard({ img, title }) {
    let navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        width="100%"
        image={img}
        alt="trivia"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Complete this trivia and earn tokens
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>navigate("/trivia")}>Start Trivia</Button>
      </CardActions>
    </Card>
  );
}
