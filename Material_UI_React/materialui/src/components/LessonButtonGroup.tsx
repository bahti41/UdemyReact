import { Button, ButtonGroup, Stack } from "@mui/material";
import React from "react";

const LessonButtonGroup = () => {
  return (
    <>
      <Stack direction="row">
        <ButtonGroup variant="contained">
          <Button>Butonlarım</Button>
          <Button>Butonlarım</Button>
          <Button>Butonlarım</Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined">
          <Button>Butonlarım</Button>
          <Button>Butonlarım</Button>
          <Button>Butonlarım</Button>
        </ButtonGroup>
        <ButtonGroup variant="text">
          <Button>Butonlarım</Button>
          <Button>Butonlarım</Button>
          <Button>Butonlarım</Button>
        </ButtonGroup>
        <ButtonGroup variant="text" orientation="vertical">
          <Button>Butonlarım</Button>
          <Button>Butonlarım</Button>
          <Button>Butonlarım</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="text"
          orientation="vertical"
          size="large"
          color="error"
        >
          <Button>Butonlarım</Button>
          <Button>Butonlarım</Button>
          <Button>Butonlarım</Button>
        </ButtonGroup>
      </Stack>
    </>
  );
};

export default LessonButtonGroup;
