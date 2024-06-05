import { Button, IconButton, Snackbar, SnackbarContent } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const LessonSnackbar = () => {
  const [snackbar, setSnackbar] = useState(false);

  const handleClick = () => {
    setSnackbar(true);
  };

  const handleClose = () => {
    setSnackbar(false);
  };

  const action = (
    <React.Fragment>
      <Button color="primary" size="small" onClick={handleClose}>
        Geri Al
      </Button>
      <IconButton>
        <CloseIcon sx={{ color: "white" }} onClick={handleClose} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      <Button onClick={handleClick}>Snackbarı Ac</Button>
      <Snackbar
        open={snackbar}
        message="Hata Mesajı Aldınız!!"
        action={action}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </>
  );
};

export default LessonSnackbar;
