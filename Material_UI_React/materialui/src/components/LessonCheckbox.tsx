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

const LessonCheckbox = () => {
  const [isAccept, setIsAccept] = useState(false);

  console.log(isAccept);

  return (
    <Box>
      <Box>
        <FormControl>
          <FormLabel>Egitim Durumu</FormLabel>
          <FormGroup row>
            <FormControlLabel disabled control={<Checkbox />} label="Lise" />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Üniversite"
            />
            <FormControlLabel control={<Checkbox />} label="İlkokul" />
          </FormGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Egitim Durumu</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isAccept}
                  onChange={(e) => setIsAccept(e.target.checked)}
                />
              }
              label="Kullanım koşullarını kabul ediyorum"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default LessonCheckbox;
