import { Alert, AlertTitle, Stack } from "@mui/material";
import React from "react";

const LessonAlert = () => {
  return (
    <Stack spacing={3}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>LessonAlert
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>LessonAlert
      </Alert>
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>LessonAlert
      </Alert>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>LessonAlert
      </Alert>
    </Stack>
  );
};

export default LessonAlert;
