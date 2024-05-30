import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Stack,
} from "@mui/material";
import React, { useState } from "react";

const LessonForCheckbox = () => {
  const [isAccept, setIsAccept] = useState(false);
  const [knowlegde, setknowlegde] = useState<string[]>([]);
  console.log(knowlegde);

  const handleKnowlegdeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = knowlegde.indexOf(e.target.value);
    if (index === -1) {
      setknowlegde([...knowlegde, e.target.value]);
    } else {
      setknowlegde(knowlegde.filter((item) => item !== e.target.value));
    }
  };

  return (
    <Box>
      <FormControl>
        <FormLabel>Frontend de neleri biliyorsun</FormLabel>
        <FormGroup row>
          <FormControlLabel
            value="react"
            control={
              <Checkbox
                checked={knowlegde.includes("react")}
                onChange={handleKnowlegdeChange}
              />
            }
            label="React.js"
          />
          <FormControlLabel
            value="angular"
            control={
              <Checkbox
                checked={knowlegde.includes("angular")}
                onChange={handleKnowlegdeChange}
              />
            }
            label="Angular"
          />
          <FormControlLabel
            value="mvc"
            control={
              <Checkbox
                checked={knowlegde.includes("mvc")}
                onChange={handleKnowlegdeChange}
              />
            }
            label="MVC"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default LessonForCheckbox;
