import { InputAdornment, Stack, TextField } from "@mui/material";
import { readFile } from "fs";
import React, { useState } from "react";

const LessonTextFiled = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <TextField label="ad" />
          <TextField label="ad" variant="outlined" />
          <TextField label="ad" variant="filled" />
          <TextField label="ad" variant="standard" />
          <TextField
            label="ad"
            variant="outlined"
            size="small"
            color="warning"
          />
          <TextField
            label="ad"
            variant="outlined"
            size="small"
            color="warning"
            helperText="isminizi giriniz"
          />
          <TextField
            type="password"
            label="ad"
            variant="outlined"
            size="small"
            color="warning"
            helperText="isminizi giriniz"
          />
          <TextField
            disabled
            label="ad"
            variant="outlined"
            size="small"
            color="warning"
            helperText="isminizi giriniz"
          />
          <TextField
            inputProps={{ readOnly: true }}
            label="ad"
            variant="outlined"
            size="small"
            color="warning"
            helperText="isminizi giriniz"
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">TL</InputAdornment>
              ),
            }}
            label="Toplam"
            variant="outlined"
            size="small"
            color="warning"
            helperText="isminizi giriniz"
          />
          <TextField
            InputProps={{
              endAdornment: <InputAdornment position="end">TL</InputAdornment>,
            }}
            label="Toplam"
            variant="outlined"
            size="small"
            color="warning"
            helperText="isminizi giriniz"
          />
        </Stack>
        <Stack direction="row">
          <TextField
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="password"
            label="şifre"
            variant="outlined"
            helperText={
              !value
                ? "Lütfen Şifrenizi Giriniz.."
                : "Şifrenizi Kimseyle Paylaşmayınız..<"
            }
          />
        </Stack>
      </Stack>
    </>
  );
};

export default LessonTextFiled;
