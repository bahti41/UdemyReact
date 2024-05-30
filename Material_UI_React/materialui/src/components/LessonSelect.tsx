import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const LessonSelect = () => {
  const [country, setCountry] = useState("");
  console.log(country);

  //   const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setValue(e.target.value);
  //   };<<=== degişken atayarak bu işlemi yapmak
  return (
    <Box width={200}>
      <TextField
        label="Ülke Seçiniz.."
        select
        fullWidth
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <MenuItem value="tr">Turkey</MenuItem>
        <MenuItem value="usa">Abd</MenuItem>
        <MenuItem value="fr">France</MenuItem>
      </TextField>
    </Box>
  );
};

export default LessonSelect;
