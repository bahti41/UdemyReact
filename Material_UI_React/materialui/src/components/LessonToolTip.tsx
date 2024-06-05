import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const LessonToolTip = () => {
  return (
    <Tooltip title="Sil" placement="right">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};

export default LessonToolTip;
