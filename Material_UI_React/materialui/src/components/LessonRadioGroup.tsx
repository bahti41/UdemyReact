import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import React, { useState } from "react";

const LessonRadioGroup = () => {
  const [value, setValue] = useState("");
  console.log(value);

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setValue(event.target.value);
  //   };  <=== Degişken atayarak bu işlemi yapmak
  return (
    <>
      <FormControl>
        <FormLabel>Maaş Beklentiniz</FormLabel>
        <RadioGroup
          row
          name="extexted-salary"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <FormControlLabel label="2000$" value="2000" control={<Radio />} />
          <FormControlLabel label="3000$" value="3000" control={<Radio />} />
          <FormControlLabel label="4000$" value="4000" control={<Radio />} />
        </RadioGroup>
        <FormHelperText>Yanlış Seçim</FormHelperText>
      </FormControl>
    </>
  );
};

export default LessonRadioGroup;
