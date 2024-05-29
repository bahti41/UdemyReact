import React from "react";
import { Typography } from "@mui/material";

const LessonTypography = () => {
  return (
    <>
      <div>
        <Typography variant="body1">
          Body1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Typography>
        <Typography variant="body2">
          Body2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Typography>

        <Typography variant="h1">h1 H1 GÖRÜNÜM</Typography>
        <Typography variant="h2">h2 H1 GÖRÜNÜM</Typography>
        <Typography variant="h3">h3 H1 GÖRÜNÜM</Typography>
        <Typography variant="h4">h4 H1 GÖRÜNÜM</Typography>
        <Typography variant="h5">h5 H1 GÖRÜNÜM</Typography>
        <Typography variant="h6">h6 H1 GÖRÜNÜM</Typography>

        <Typography variant="h1" component="h4">
          H1 GÖRÜNÜM
        </Typography>

        <Typography variant="h1" align="left">
          h1 H1 GÖRÜNÜM
        </Typography>
        <Typography variant="h1" align="right">
          h1 H1 GÖRÜNÜM
        </Typography>

        <Typography variant="subtitle1">Alt Başlık 1</Typography>
        <Typography variant="subtitle2">Alt Başlık 2</Typography>
      </div>
    </>
  );
};

export default LessonTypography;
