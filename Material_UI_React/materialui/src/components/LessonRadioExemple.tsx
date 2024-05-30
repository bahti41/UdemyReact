import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import React, { useState } from "react";

const LessonRadioExemple = () => {
  const [value, setValue] = useState("");
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === "bahtiyar") {
      setHelperText("Back-end icin gercek bir master");
      setError(false);
    } else if (value === "talut") {
      setHelperText("Mükkemller bir secim hocanız türkiyede bir numara");
      setError(false);
    } else {
      setHelperText("Lütfen Seçim Yapınız..");
      setError(true);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl error={error}>
          <FormLabel>
            En Kapsamlı Frondend Egitimini Veren Egitmen Kim?
          </FormLabel>
          <RadioGroup onChange={handleRadioChange}>
            <FormControlLabel
              value="bahtiyar"
              label="Bahtiyar Sönmez"
              control={<Radio />}
            />
            <FormControlLabel
              value="talut"
              label="Talut Sönmez"
              control={<Radio />}
            />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
          <Button type="submit" variant="outlined">
            Gönder
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default LessonRadioExemple;
