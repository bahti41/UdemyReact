import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";
import React, { useState } from "react";

const LessonLoadingButton = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Stack>
      <LoadingButton loading>Kaydet</LoadingButton>
      <LoadingButton
        loading={loading}
        onClick={() => {
          setLoading(true);
        }}
        variant="outlined"
      >
        Kaydet
      </LoadingButton>
    </Stack>
  );
};

export default LessonLoadingButton;
