import { CircularProgress, LinearProgress, Stack } from "@mui/material";
import React from "react";

const LessonSpinner = () => {
  return (
    <Stack spacing={5}>
      <CircularProgress color="success" />
      <CircularProgress color="warning" />
      <CircularProgress variant="determinate" value={50} color="error" />

      <LinearProgress color="success" />
      <LinearProgress color="warning" />
      <LinearProgress variant="determinate" value={50} color="error" />
    </Stack>
  );
};

export default LessonSpinner;
