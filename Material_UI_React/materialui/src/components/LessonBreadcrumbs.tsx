import { Breadcrumbs, Link } from "@mui/material";
import React from "react";

const LessonBreadcrumbs = () => {
  return (
    <Breadcrumbs separator=">" maxItems={2}>
      <Link href="/" underline="hover">
        Ana Sayfa
      </Link>
      <Link href="/" underline="hover">
        Blog
      </Link>
      <Link underline="none">Bahtiyar Sönmez</Link>
      <Link underline="none">Bahtiyar Sönmez</Link>
      <Link underline="none">Bahtiyar Sönmez</Link>
      <Link underline="none">Bahtiyar Sönmez</Link>
    </Breadcrumbs>
  );
};

export default LessonBreadcrumbs;
