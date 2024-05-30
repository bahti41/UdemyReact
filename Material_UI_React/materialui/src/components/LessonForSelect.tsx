import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const LessonForSelect = () => {
  const [country, setCountry] = useState<string[]>([]);
  console.log(country);
  return (
    <Box width={200}>
      <TextField
        SelectProps={{
          multiple: true,
        }}
        label="Ülke Seçiniz.."
        select
        fullWidth
        value={country}
        onChange={(e) =>
          setCountry(
            typeof e.target.value === "string"
              ? e.target.value.split(",")
              : e.target.value
          )
        }
      >
        <MenuItem value="tr">Turkey</MenuItem>
        <MenuItem value="usa">Abd</MenuItem>
        <MenuItem value="fr">France</MenuItem>
      </TextField>
    </Box>
  );
};

export default LessonForSelect;
