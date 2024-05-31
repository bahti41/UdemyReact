import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";

const LessonAppBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openControl = Boolean(anchorEl);
  console.log(openControl);

  const handleClinck = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
    console.log(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ marginRight: "auto" }}>
          Header Örnegi
        </Typography>
        <Stack direction="row">
          <Button
            sx={{
              color: "white",
            }}
          >
            AnaSayfa
          </Button>
          <Button
            sx={{
              color: "white",
            }}
          >
            Hakkımzıda
          </Button>
          <Button
            sx={{
              color: "white",
            }}
          >
            Ürünler
          </Button>
          <Button
            sx={{
              color: "white",
            }}
          >
            Fiyatlar
          </Button>
          <Button
            sx={{
              color: "white",
            }}
            onClick={handleClinck}
          >
            İndirimdekiler
          </Button>
        </Stack>
        <Menu anchorEl={anchorEl} open={openControl} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Kitaplar</MenuItem>
          <MenuItem onClick={handleClose}>Defterler</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default LessonAppBar;
