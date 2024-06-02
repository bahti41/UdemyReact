import { Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const LessonLink = () => {
  const handleClick = () => {
    window.location.href = "https://github.com/bahti41";
    console.log("bati");
  };

  return (
    <Box>
      {/* <Link href="https://github.com/bahti41">Web Siteme Git</Link>
      <Link href="https://github.com/bahti41" color="error">
        Web Siteme Git
      </Link>
      <Link href="https://github.com/bahti41" variant="body2">
        Web Siteme Git
      </Link> */}

      <Link href="https://github.com/bahti41" underline="none">
        Web Siteme Git
      </Link>
      <Link href="https://github.com/bahti41" underline="always">
        Web Siteme Git
      </Link>
      <Link href="https://github.com/bahti41" underline="hover">
        Web Siteme Git
      </Link>
      <Link component="button" onClick={handleClick}>
        Web Siteme Git
      </Link>
    </Box>
  );
};

export default LessonLink;
