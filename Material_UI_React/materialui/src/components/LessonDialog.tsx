import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";

const LessonDialog = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  console.log(dialogOpen);
  return (
    <>
      <Button onClick={() => setDialogOpen(true)}>Dailog Ac</Button>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Hangisini Seviyorsun</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Frond-End Frameworklarinden Hangisini Seviyorsun?
          </DialogContentText>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>React.js</Button>
            <Button onClick={() => setDialogOpen(false)}>MVC</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LessonDialog;
