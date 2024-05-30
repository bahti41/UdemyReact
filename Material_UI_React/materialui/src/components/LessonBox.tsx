import { Box } from "@mui/material";
import React from "react";

const LessonBox = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100px",
        height: "100px",
        color: "white",
        padding: "35px",
        "&: hover": {
          backgroundColor: "primary.light",
        },
      }}
    >
      LessonBox
    </Box>
  );
};

export default LessonBox;
