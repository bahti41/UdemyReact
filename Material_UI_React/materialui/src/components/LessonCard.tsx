import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const LessonCard = () => {
  return (
    <Card
      sx={{
        width: 350,
      }}
    >
      <CardMedia
        height="250px"
        component="img"
        image="https://source.unsplash.com/random"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Başlığım
        </Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. tempor
          incididunt ut labore et dolore magna aliqua.
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="error">Temizle</Button>
        <Button color="success">Kaydet</Button>
      </CardActions>
    </Card>
  );
};

export default LessonCard;
