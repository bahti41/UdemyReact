import { Box, Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const LessonDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton size="large" onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={isOpen} anchor="right" onClose={() => setIsOpen(false)}>
        <Box width="250px" textAlign="center">
          <Typography component="div" variant="h6">
            Soldaki Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default LessonDrawer;
