import { Avatar, AvatarGroup, Stack } from "@mui/material";
import Bahtiyar from "../image/BahtiyarProfil.jpeg";
import React from "react";

const LessonAvatar = () => {
  return (
    <Stack direction="row" spacing={5}>
      <AvatarGroup>
        <Avatar
          sx={{ marginRight: 10 }}
          src="https://randomuser.me/api/portraits/women/56.jpg"
        />
        <Avatar src={Bahtiyar} />
      </AvatarGroup>

      <AvatarGroup max={4}>
        <Avatar
          variant="rounded"
          sx={{
            marginRight: 10,
            bgcolor: "primary.light",
            width: 100,
            height: 100,
          }}
        >
          Bahtiyar
        </Avatar>
        <Avatar
          variant="square"
          sx={{
            marginRight: 10,
            bgcolor: "success.light",
            width: 100,
            height: 100,
          }}
        >
          Talut
        </Avatar>

        <Avatar
          sx={{
            marginRight: 10,
            bgcolor: "primary.light",
            width: 100,
            height: 100,
          }}
        >
          Bahtiyar
        </Avatar>
        <Avatar
          variant="square"
          sx={{
            marginRight: 10,
            bgcolor: "success.light",
            width: 100,
            height: 100,
          }}
        >
          Talut
        </Avatar>
        <Avatar
          sx={{
            marginRight: 10,
            bgcolor: "primary.light",
            width: 100,
            height: 100,
          }}
        >
          Bahtiyar
        </Avatar>
        <Avatar
          variant="square"
          sx={{
            marginRight: 10,
            bgcolor: "success.light",
            width: 100,
            height: 100,
          }}
        >
          Talut
        </Avatar>
        <Avatar
          sx={{
            marginRight: 10,
            bgcolor: "primary.light",
            width: 100,
            height: 100,
          }}
        >
          Bahtiyar
        </Avatar>
        <Avatar
          variant="square"
          sx={{
            marginRight: 10,
            bgcolor: "success.light",
            width: 100,
            height: 100,
          }}
        >
          Talut
        </Avatar>
      </AvatarGroup>
    </Stack>
  );
};

export default LessonAvatar;
